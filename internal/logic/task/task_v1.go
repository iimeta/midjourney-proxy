package task

import (
	"context"
	"github.com/bwmarrin/discordgo"
	"github.com/bwmarrin/snowflake"
	"github.com/gogf/gf/v2/container/gmap"
	"github.com/gogf/gf/v2/container/gqueue"
	"github.com/gogf/gf/v2/encoding/gjson"
	"github.com/gogf/gf/v2/os/gctx"
	"github.com/gogf/gf/v2/os/grpool"
	"github.com/gogf/gf/v2/os/gtime"
	"github.com/gogf/gf/v2/text/gregex"
	"github.com/gogf/gf/v2/text/gstr"
	"github.com/gogf/gf/v2/util/gconv"
	"github.com/iimeta/midjourney-proxy/internal/consts"
	"github.com/iimeta/midjourney-proxy/internal/model"
	"github.com/iimeta/midjourney-proxy/internal/service"
	"github.com/iimeta/midjourney-proxy/utility/logger"
)

type sTaskV1 struct{}

var queue *gqueue.Queue

var taskMap *gmap.StrAnyMap

func init() {

	service.RegisterTaskV1(New())

	taskMap = gmap.NewStrAnyMap(true)

	queue = gqueue.New()

	_ = grpool.AddWithRecover(gctx.New(), task, nil)
}

func New() service.ITaskV1 {
	return &sTaskV1{}
}

func (s *sTaskV1) NewTask(ctx context.Context, action, prompt string, index ...int) (string, error) {

	node, err := snowflake.NewNode(0)
	if err != nil {
		logger.Error(ctx, err)
		return "", err
	}

	taskId := node.Generate().String()

	task := &model.Task{
		FetchRes: &model.FetchRes{
			Id:          taskId,
			Prompt:      prompt,
			PromptEn:    prompt,
			SubmitTime:  gtime.Now().UnixMilli(),
			Description: "/" + action + " " + prompt,
			Action:      action,
			Status:      consts.TASK_STATUS_NOT_START,
		},
	}

	if len(index) > 0 {
		task.Index = index[0]
	}

	queue.Push(task)

	taskMap.Set(task.Id, task)

	return taskId, nil
}

func (s *sTaskV1) TaskHandler(ctx context.Context, taskType, messageId, messageContent string, components []discordgo.MessageComponent, messageAttachment *discordgo.MessageAttachment) {

	action := consts.TASK_ACTION_IMAGINE
	index := 0

	//**sky** - Image #2
	match, err := gregex.MatchString(`\*\*(.*?)\*\* - Image #\d{1}`, messageContent)
	if err != nil {
		logger.Error(ctx, err)
		return
	}

	logger.Infof(ctx, "Image match: %v", match)

	if len(match) > 0 {
		action = consts.TASK_ACTION_UPSCALE
		index = gconv.Int(match[0][len(match[0])-1:])
	}

	if len(match) == 0 {

		//**sky** - Variations
		match, err = gregex.MatchString(`\*\*(.*?)\*\* - Variations`, messageContent)
		if err != nil {
			logger.Error(ctx, err)
			return
		}

		logger.Infof(ctx, "Variations match: %v", match)

		if len(match) > 0 {
			action = consts.TASK_ACTION_VARIATION
		}
	}

	if len(match) == 0 {

		match, err = gregex.MatchString(`\*\*(.*?)\*\*`, messageContent)
		if err != nil {
			logger.Error(ctx, err)
			return
		}

		logger.Infof(ctx, "match: %v", match)
	}

	if len(match) > 1 {

		content := match[1] // 获取匹配到的内容

		task := findTask(action, content, index)

		if task != nil {

			imageURL := ""
			if messageAttachment != nil {
				imageURL = messageAttachment.URL
			}

			if imageURL != "" {
				imageURL = gstr.Replace(imageURL, "https://cdn.discordapp.com", CDN_PROXY_URL(ctx))
			}

			switch taskType {
			case consts.EVENT_MESSAGE_CREATE:

				if gstr.HasSuffix(messageContent, "(Waiting to start)") {

					task.Status = consts.TASK_STATUS_SUBMITTED
					task.SubmitTime = gtime.Now().UnixMilli()

				} else {

					task.Status = consts.TASK_STATUS_SUCCESS
					task.ImageUrl = imageURL
					task.Progress = "100%"
					task.FinishTime = gtime.Now().UnixMilli()
					task.Properties.MessageId = messageId
					task.Properties.ProgressMessageId = messageAttachment.ID
					task.Properties.FinalPrompt = content

					if len(components) > 0 {

						for _, value := range components {

							bytes, err := value.MarshalJSON()
							if err != nil {
								logger.Error(ctx, err)
								return
							}

							actionsRow := discordgo.ActionsRow{}
							err = gjson.Unmarshal(bytes, &actionsRow)
							if err != nil {
								logger.Error(ctx, err)
								return
							}

							for _, component := range actionsRow.Components {

								bytes, err = component.MarshalJSON()
								if err != nil {
									logger.Error(ctx, err)
									return
								}

								button := discordgo.Button{}
								err = gjson.Unmarshal(bytes, &button)
								if err != nil {
									logger.Error(ctx, err)
									return
								}

								task.Buttons = append(task.Buttons, button)
							}
						}
					}

					if len(task.Buttons) > 0 {
						split := gstr.Split(task.Buttons[0].CustomID, "::")
						task.Properties.MessageHash = split[len(split)-1]
					}
				}

			case consts.EVENT_MESSAGE_UPDATE:

				match, err := gregex.MatchString(`\((\d{1,3}%)\)`, messageContent)
				if err != nil {
					logger.Error(ctx, err)
					return
				}

				if len(match) > 1 {

					content := match[1] // 获取匹配到的内容

					task.Status = consts.TASK_STATUS_IN_PROGRESS
					task.ImageUrl = imageURL
					task.Progress = content
				}
			}

			logger.Infof(ctx, "task: %s", gjson.MustEncodeString(task))

			queue.Push(task)
			taskMap.Set(task.Id, task)
		}
	}
}

func (s *sTaskV1) GetTask(ctx context.Context, taskId string) *model.Task {

	value := taskMap.Get(taskId)

	if value != nil {
		return value.(*model.Task)
	}

	return nil
}

func (s *sTaskV1) Fetch(ctx context.Context, taskId string) *model.FetchRes {
	return s.GetTask(ctx, taskId).FetchRes
}

func findTask(action, prompt string, index int) *model.Task {

	for _, value := range taskMap.Map() {

		task := value.(*model.Task)

		if prompt == task.Prompt && action == task.Action && task.Status != consts.TASK_STATUS_SUCCESS && (index == 0 || index == task.Index) {
			return task
		}
	}

	return nil
}

func task(ctx context.Context) {
	// 消费者，不停读取队列数据并输出到终端
	for {
		if queueItem := queue.Pop(); queueItem != nil {
			logger.Infof(ctx, "queueItem: %s", gjson.MustEncodeString(queueItem))
		} else {
			_ = grpool.AddWithRecover(gctx.New(), task, nil)
			return
		}
	}
}

package submit

import (
	"context"
	"fmt"
	"github.com/iimeta/midjourney-proxy/internal/consts"
	"github.com/iimeta/midjourney-proxy/internal/logic/interactions"
	"github.com/iimeta/midjourney-proxy/internal/model"
	"github.com/iimeta/midjourney-proxy/internal/service"
	"github.com/iimeta/midjourney-proxy/utility/logger"
)

type sSubmitV1 struct{}

func init() {
	service.RegisterSubmitV1(New())
}

func New() service.ISubmitV1 {
	return &sSubmitV1{}
}

func (s *sSubmitV1) Imagine(ctx context.Context, imagine model.Imagine) (*model.SubmitRes, error) {

	data := model.ImagineData{
		Options: []model.Option{{
			Name:  "prompt",
			Type:  3,
			Value: imagine.Prompt,
		}},
		Name:    "imagine",
		Id:      "938956540159881230",
		Type:    1,
		Version: "1118961510123847772",
	}

	interactionsReq := model.InteractionsImagineReq{
		ChannelId:     interactions.CHANNEL_ID(ctx),
		GuildId:       interactions.GUILD_ID(ctx),
		SessionId:     interactions.SESSION_ID(ctx),
		Data:          data,
		Type:          2,
		ApplicationId: "936929561302675456",
	}

	result := new(interface{})

	err := service.InteractionsV1().Interactions(ctx, interactionsReq, &result)
	if err != nil {
		logger.Error(ctx, err)
		return nil, err
	}

	taskId, err := service.TaskV1().NewTask(ctx, consts.TASK_ACTION_IMAGINE, imagine.Prompt)
	if err != nil {
		logger.Error(ctx, err)
		return nil, err
	}

	submitRes := &model.SubmitRes{
		Code:        1,
		Description: "提交成功",
		Result:      taskId,
	}

	return submitRes, nil
}

func (s *sSubmitV1) Change(ctx context.Context, change model.Change) (*model.SubmitRes, error) {

	task := service.TaskV1().GetTask(ctx, change.TaskId)

	if task == nil {
		submitRes := &model.SubmitRes{
			Code:        -1,
			Description: "任务不存在",
			Result:      "",
		}

		return submitRes, nil
	}

	customId := ""
	action := ""
	if change.Action == "UPSCALE" {
		customId = fmt.Sprintf("MJ::JOB::upsample::%d::%s", change.Index, task.FetchRes.Properties.MessageHash)
		action = consts.TASK_ACTION_UPSCALE
	} else {
		customId = fmt.Sprintf("MJ::JOB::variation::%d::%s", change.Index, task.FetchRes.Properties.MessageHash)
		action = consts.TASK_ACTION_VARIATION
	}

	data := model.ChangeData{
		ComponentType: 2,
		CustomId:      customId,
	}

	interactionsReq := model.InteractionsChangeReq{
		ChannelId:     interactions.CHANNEL_ID(ctx),
		GuildId:       interactions.GUILD_ID(ctx),
		SessionId:     interactions.SESSION_ID(ctx),
		Data:          data,
		Type:          3,
		ApplicationId: "936929561302675456",
		MessageId:     task.Properties.MessageId,
	}

	result := new(interface{})

	err := service.InteractionsV1().Interactions(ctx, interactionsReq, &result)
	if err != nil {
		logger.Error(ctx, err)
		return nil, err
	}

	taskId, err := service.TaskV1().NewTask(ctx, action, task.Prompt, change.Index)
	if err != nil {
		logger.Error(ctx, err)
		return nil, err
	}

	submitRes := &model.SubmitRes{
		Code:        1,
		Description: "提交成功",
		Result:      taskId,
	}

	return submitRes, nil
}

// ================================================================================
// Code generated and maintained by GoFrame CLI tool. DO NOT EDIT.
// You can delete these comments if you wish manually maintain this interface file.
// ================================================================================

package service

import (
	"context"

	"github.com/bwmarrin/discordgo"
	"github.com/iimeta/midjourney-proxy/internal/model"
)

type (
	ITaskV1 interface {
		NewTask(ctx context.Context, action, prompt string, index ...int) (string, error)
		TaskHandler(ctx context.Context, taskType, messageId, messageContent string, components []discordgo.MessageComponent, messageAttachment *discordgo.MessageAttachment)
		GetTask(ctx context.Context, taskId string) *model.Task
		Fetch(ctx context.Context, taskId string) *model.FetchRes
	}
)

var (
	localTaskV1 ITaskV1
)

func TaskV1() ITaskV1 {
	if localTaskV1 == nil {
		panic("implement not found for interface ITaskV1, forgot register?")
	}
	return localTaskV1
}

func RegisterTaskV1(i ITaskV1) {
	localTaskV1 = i
}

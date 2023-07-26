// ================================================================================
// Code generated and maintained by GoFrame CLI tool. DO NOT EDIT.
// You can delete these comments if you wish manually maintain this interface file.
// ================================================================================

package service

import (
	"context"

	"github.com/bwmarrin/discordgo"
)

type (
	IDiscordV1 interface {
		Open(ctx context.Context) (*discordgo.Session, error)
		Close(ctx context.Context, session *discordgo.Session) error
	}
)

var (
	localDiscordV1 IDiscordV1
)

func DiscordV1() IDiscordV1 {
	if localDiscordV1 == nil {
		panic("implement not found for interface IDiscordV1, forgot register?")
	}
	return localDiscordV1
}

func RegisterDiscordV1(i IDiscordV1) {
	localDiscordV1 = i
}

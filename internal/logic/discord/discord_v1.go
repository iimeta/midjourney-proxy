package discord

import (
	"context"
	"github.com/bwmarrin/discordgo"
	"github.com/gogf/gf/v2/os/gctx"
	"github.com/iimeta/midjourney-proxy/internal/consts"
	"github.com/iimeta/midjourney-proxy/internal/service"
	"github.com/iimeta/midjourney-proxy/utility/logger"
	"github.com/iimeta/midjourney-proxy/utility/util"
	"time"
)

type sDiscordV1 struct{}

func init() {

	ctx := gctx.New()

	service.RegisterDiscordV1(NewV1())

	service.DiscordV1().Open(ctx)
}

func NewV1() service.IDiscordV1 {
	return &sDiscordV1{}
}

func (s *sDiscordV1) Open(ctx context.Context) (*discordgo.Session, error) {

	session, err := discordgo.New(BOT_TOKEN(ctx))
	if err != nil {
		logger.Error(ctx, err)
		return nil, err
	}

	session.AddHandler(messageCreate)
	session.AddHandler(messageUpdate)

	session.Dialer.Proxy = util.GetProxy(ctx)
	session.Dialer.HandshakeTimeout = 60 * time.Second
	session.Client.Transport = util.GetProxyTransport(ctx)

	err = session.Open()
	if err != nil {
		logger.Error(ctx, err)
		panic(err)
		return nil, err
	}

	logger.Info(ctx, "[DISCORD] server start")

	return session, nil
}

func (s *sDiscordV1) Close(ctx context.Context, session *discordgo.Session) error {

	err := session.Close()
	if err != nil {
		logger.Error(ctx, err)
		return err
	}

	logger.Info(ctx, "[DISCORD] server stop")

	return nil
}

func messageHandler(ctx context.Context, event string, message *discordgo.Message) {

	logger.Infof(ctx, "[DISCORD] %s Event: %s, MessageId: %s, MessageType: %d, MessageContent: %s", message.Author.Username, event, message.ID, message.Type, message.Content)

	var messageAttachment *discordgo.MessageAttachment
	if len(message.Attachments) > 0 {
		messageAttachment = message.Attachments[0]
	}

	switch event {
	case consts.EVENT_MESSAGE_CREATE:
		service.TaskV1().TaskHandler(ctx, consts.TASK_TYPE_CREATE, message.ID, message.Content, message.Components, messageAttachment)
	case consts.EVENT_MESSAGE_UPDATE:
		service.TaskV1().TaskHandler(ctx, consts.TASK_TYPE_UPDATE, message.ID, message.Content, message.Components, messageAttachment)
	}
}

func messageCreate(_ *discordgo.Session, message *discordgo.MessageCreate) {
	messageHandler(gctx.New(), consts.EVENT_MESSAGE_CREATE, message.Message)
}

func messageUpdate(_ *discordgo.Session, message *discordgo.MessageUpdate) {
	messageHandler(gctx.New(), consts.EVENT_MESSAGE_UPDATE, message.Message)
}

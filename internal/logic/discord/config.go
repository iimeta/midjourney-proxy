package discord

import (
	"context"
	"github.com/iimeta/midjourney-proxy/internal/consts"
	"github.com/iimeta/midjourney-proxy/utility/config"
)

var BOT_TOKEN = func(ctx context.Context) string {
	return "Bot " + config.GetString(ctx, consts.CFG_MIDJOURNEY_DISCORD_BOT_TOKEN)
}

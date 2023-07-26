package interactions

import (
	"context"
	"github.com/iimeta/midjourney-proxy/internal/consts"
	"github.com/iimeta/midjourney-proxy/utility/config"
)

var HOST = func(ctx context.Context) string {
	return config.GetString(ctx, consts.CFG_MIDJOURNEY_DISCORD_HOST, "https://discord.com")
}

var HEADER = func(ctx context.Context) map[string]string {
	return config.GetMapStrStr(ctx, consts.CFG_MIDJOURNEY_DISCORD_HEADER)
}

var GUILD_ID = func(ctx context.Context) string {
	return config.GetString(ctx, consts.CFG_MIDJOURNEY_DISCORD_GUILD_ID)
}

var CHANNEL_ID = func(ctx context.Context) string {
	return config.GetString(ctx, consts.CFG_MIDJOURNEY_DISCORD_CHANNEL_ID)
}

var SESSION_ID = func(ctx context.Context) string {
	return config.GetString(ctx, consts.CFG_MIDJOURNEY_DISCORD_SESSION_ID)
}

package task

import (
	"context"
	"github.com/iimeta/midjourney-proxy/internal/consts"
	"github.com/iimeta/midjourney-proxy/utility/config"
)

var CDN_PROXY_URL = func(ctx context.Context) string {
	return config.GetString(ctx, consts.CFG_MIDJOURNEY_DISCORD_CDN_PROXY_URL, "https://cdn.discordapp.com")
}

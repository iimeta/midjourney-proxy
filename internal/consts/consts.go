package consts

const (
	CFG_MIDJOURNEY_DISCORD_HOST       = "midjourney.discord.host"
	CFG_MIDJOURNEY_DISCORD_HEADER     = "midjourney.discord.header"
	CFG_MIDJOURNEY_DISCORD_GUILD_ID   = "midjourney.discord.guild_id"
	CFG_MIDJOURNEY_DISCORD_CHANNEL_ID = "midjourney.discord.channel_id"
	CFG_MIDJOURNEY_DISCORD_SESSION_ID = "midjourney.discord.session_id"

	CFG_MIDJOURNEY_DISCORD_BOT_TOKEN     = "midjourney.discord.bot_token"
	CFG_MIDJOURNEY_DISCORD_OAUTH2_TOKEN  = "midjourney.discord.oauth2_token"
	CFG_MIDJOURNEY_DISCORD_CDN_PROXY_URL = "midjourney.discord.cdn_proxy_url"
)

const (
	INTERACTIONS_PATH = "/api/v9/interactions"
)

const (
	EVENT_MESSAGE_CREATE = "CREATE"
	EVENT_MESSAGE_UPDATE = "UPDATE"
)

const (
	TASK_TYPE_CREATE = "CREATE"
	TASK_TYPE_UPDATE = "UPDATE"
)

const (
	TASK_STATUS_NOT_START   = "NOT_START"   // 未启动
	TASK_STATUS_SUBMITTED   = "SUBMITTED"   // 已提交
	TASK_STATUS_IN_PROGRESS = "IN_PROGRESS" // 执行中
	TASK_STATUS_SUCCESS     = "SUCCESS"     // 成功
	TASK_STATUS_FAILURE     = "FAILURE"     // 失败
)

const (
	TASK_ACTION_IMAGINE   = "IMAGINE"   // 生成图片
	TASK_ACTION_UPSCALE   = "UPSCALE"   // 选中放大
	TASK_ACTION_VARIATION = "VARIATION" // 选中其中的一张图，生成四张相似的
	TASK_ACTION_REROLL    = "REROLL"    // 重新生成
	TASK_ACTION_DESCRIBE  = "DESCRIBE"  // 图转prompt
	TASK_ACTION_BLEND     = "BLEND"     // 多图混合
)

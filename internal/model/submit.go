package model

type SubmitRes struct {
	Code        int    `json:"code"`
	Description string `json:"description"`
	Result      string `json:"result"`
	Properties  struct {
	} `json:"properties"`
}

type Imagine struct {
	Prompt string `json:"prompt"`
	Base64 string `json:"base64"`
}

type InteractionsImagineReq struct {
	Data          ImagineData `json:"data"`
	GuildId       string      `json:"guild_id"`
	SessionId     string      `json:"session_id"`
	Type          int         `json:"type"`
	ChannelId     string      `json:"channel_id"`
	ApplicationId string      `json:"application_id"`
}

type ImagineData struct {
	Name    string   `json:"name"`
	Options []Option `json:"options"`
	Id      string   `json:"id"`
	Type    int      `json:"type"`
	Version string   `json:"version"`
}

type InteractionsChangeReq struct {
	Data          ChangeData `json:"data"`
	GuildId       string     `json:"guild_id"`
	SessionId     string     `json:"session_id"`
	Type          int        `json:"type"`
	ChannelId     string     `json:"channel_id"`
	ApplicationId string     `json:"application_id"`
	MessageId     string     `json:"message_id"`
}

type ChangeData struct {
	ComponentType int    `json:"component_type"`
	CustomId      string `json:"custom_id"`
}

type Option struct {
	Name  string `json:"name"`
	Type  int    `json:"type"`
	Value string `json:"value"`
}

type Change struct {
	Action string `json:"action"`
	Index  int    `json:"index"`
	TaskId string `json:"taskId"`
}
type ChangeRes struct {
	Code        int    `json:"code"`
	Description string `json:"description"`
	Result      string `json:"result"`
	Properties  struct {
	} `json:"properties"`
}

type DescribeReq struct {
	Base64 string `json:"base64"`
}
type DescribeRes struct {
	Code        int    `json:"code"`
	Description string `json:"description"`
	Result      string `json:"result"`
	Properties  struct {
	} `json:"properties"`
}

type BlendReq struct {
	Base64Array []string `json:"base64Array"`
}
type BlendRes struct {
	Code        int    `json:"code"`
	Description string `json:"description"`
	Result      string `json:"result"`
	Properties  struct {
	} `json:"properties"`
}

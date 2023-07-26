package model

import "github.com/bwmarrin/discordgo"

type FetchRes struct {
	Id          string `json:"id"`
	Action      string `json:"action"`
	Prompt      string `json:"prompt"`
	PromptEn    string `json:"promptEn"`
	Description string `json:"description"`
	State       string `json:"state"`
	SubmitTime  int64  `json:"submitTime"`
	StartTime   int64  `json:"startTime"`
	FinishTime  int64  `json:"finishTime"`
	ImageUrl    string `json:"imageUrl"`
	Status      string `json:"status"`
	Progress    string `json:"progress"`
	FailReason  string `json:"failReason"`
	Properties  struct {
		NotifyHook        interface{} `json:"notifyHook"`
		Flags             int         `json:"flags"`
		MessageId         string      `json:"messageId"`
		MessageHash       string      `json:"messageHash"`
		FinalPrompt       string      `json:"finalPrompt"`
		ProgressMessageId string      `json:"progressMessageId"`
	} `json:"properties"`
}

type Task struct {
	*FetchRes
	Index   int                `json:"index"`
	Buttons []discordgo.Button `json:"buttons"`
}

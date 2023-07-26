package v1

import (
	"github.com/gogf/gf/v2/frame/g"
)

type FetchReq struct {
	g.Meta `path:"/mj/task/:task_id/fetch" tags:"midjourney" method:"get" summary:"midjourney api"`
	TaskId string `json:"task_id"`
}
type FetchRes struct {
	g.Meta `mime:"application/json" example:"json"`
}

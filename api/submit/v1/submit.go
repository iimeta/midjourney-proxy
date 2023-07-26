package v1

import (
	"github.com/gogf/gf/v2/frame/g"
	"github.com/iimeta/midjourney-proxy/internal/model"
)

type ImagineReq struct {
	g.Meta `path:"/mj/submit/imagine" tags:"midjourney" method:"post" summary:"midjourney api"`
	model.Imagine
}
type ImagineRes struct {
	g.Meta `mime:"application/json" example:"json"`
}

type ChangeReq struct {
	g.Meta `path:"/mj/submit/change" tags:"midjourney" method:"post" summary:"midjourney api"`
	model.Change
}
type ChangeRes struct {
	g.Meta `mime:"application/json" example:"json"`
}

type DescribeReq struct {
	g.Meta `path:"/mj/submit/describe" tags:"midjourney" method:"post" summary:"midjourney api"`
	model.DescribeReq
}
type DescribeRes struct {
	g.Meta `mime:"application/json" example:"json"`
}

type BlendReq struct {
	g.Meta `path:"/mj/submit/blend" tags:"midjourney" method:"post" summary:"midjourney api"`
	model.BlendReq
}
type BlendRes struct {
	g.Meta `mime:"application/json" example:"json"`
}

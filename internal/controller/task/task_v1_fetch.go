package task

import (
	"context"
	"github.com/gogf/gf/v2/frame/g"
	"github.com/iimeta/midjourney-proxy/api/task/v1"
	"github.com/iimeta/midjourney-proxy/internal/service"
)

func (c *ControllerV1) Fetch(ctx context.Context, req *v1.FetchReq) (res *v1.FetchRes, err error) {

	fetchRes := service.TaskV1().Fetch(ctx, req.TaskId)

	if fetchRes != nil {
		g.RequestFromCtx(ctx).Response.WriteJson(fetchRes)
	} else {
		g.RequestFromCtx(ctx).Response.Writeln()
	}

	return
}

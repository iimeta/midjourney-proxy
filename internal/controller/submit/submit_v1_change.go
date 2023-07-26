package submit

import (
	"context"
	"github.com/gogf/gf/v2/frame/g"
	"github.com/iimeta/midjourney-proxy/internal/service"
	"github.com/iimeta/midjourney-proxy/utility/logger"

	"github.com/iimeta/midjourney-proxy/api/submit/v1"
)

func (c *ControllerV1) Change(ctx context.Context, req *v1.ChangeReq) (res *v1.ChangeRes, err error) {

	submitRes, err := service.SubmitV1().Change(ctx, req.Change)
	if err != nil {
		logger.Error(ctx, err)
		return nil, err
	}

	g.RequestFromCtx(ctx).Response.WriteJson(submitRes)

	return
}

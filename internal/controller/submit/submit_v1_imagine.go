package submit

import (
	"context"
	"github.com/gogf/gf/v2/frame/g"
	"github.com/iimeta/midjourney-proxy/api/submit/v1"
	"github.com/iimeta/midjourney-proxy/internal/service"
	"github.com/iimeta/midjourney-proxy/utility/logger"
)

func (c *ControllerV1) Imagine(ctx context.Context, req *v1.ImagineReq) (res *v1.ImagineRes, err error) {

	submitRes, err := service.SubmitV1().Imagine(ctx, req.Imagine)
	if err != nil {
		logger.Error(ctx, err)
		return nil, err
	}

	g.RequestFromCtx(ctx).Response.WriteJson(submitRes)

	return
}

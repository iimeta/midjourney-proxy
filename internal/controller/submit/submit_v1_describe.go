package submit

import (
	"context"

	"github.com/gogf/gf/v2/errors/gcode"
	"github.com/gogf/gf/v2/errors/gerror"

	"github.com/iimeta/midjourney-proxy/api/submit/v1"
)

func (c *ControllerV1) Describe(ctx context.Context, req *v1.DescribeReq) (res *v1.DescribeRes, err error) {
	return nil, gerror.NewCode(gcode.CodeNotImplemented)
}

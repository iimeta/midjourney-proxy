// =================================================================================
// Code generated and maintained by GoFrame CLI tool. DO NOT EDIT. 
// =================================================================================

package submit

import (
	"context"
	
	"github.com/iimeta/midjourney-proxy/api/submit/v1"
)

type ISubmitV1 interface {
	Imagine(ctx context.Context, req *v1.ImagineReq) (res *v1.ImagineRes, err error)
	Change(ctx context.Context, req *v1.ChangeReq) (res *v1.ChangeRes, err error)
	Describe(ctx context.Context, req *v1.DescribeReq) (res *v1.DescribeRes, err error)
	Blend(ctx context.Context, req *v1.BlendReq) (res *v1.BlendRes, err error)
}



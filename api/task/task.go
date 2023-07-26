// =================================================================================
// Code generated and maintained by GoFrame CLI tool. DO NOT EDIT. 
// =================================================================================

package task

import (
	"context"
	
	"github.com/iimeta/midjourney-proxy/api/task/v1"
)

type ITaskV1 interface {
	Fetch(ctx context.Context, req *v1.FetchReq) (res *v1.FetchRes, err error)
}



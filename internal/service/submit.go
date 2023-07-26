// ================================================================================
// Code generated and maintained by GoFrame CLI tool. DO NOT EDIT.
// You can delete these comments if you wish manually maintain this interface file.
// ================================================================================

package service

import (
	"context"

	"github.com/iimeta/midjourney-proxy/internal/model"
)

type (
	ISubmitV1 interface {
		Imagine(ctx context.Context, imagine model.Imagine) (*model.SubmitRes, error)
		Change(ctx context.Context, change model.Change) (*model.SubmitRes, error)
	}
)

var (
	localSubmitV1 ISubmitV1
)

func SubmitV1() ISubmitV1 {
	if localSubmitV1 == nil {
		panic("implement not found for interface ISubmitV1, forgot register?")
	}
	return localSubmitV1
}

func RegisterSubmitV1(i ISubmitV1) {
	localSubmitV1 = i
}

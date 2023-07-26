// ================================================================================
// Code generated and maintained by GoFrame CLI tool. DO NOT EDIT.
// You can delete these comments if you wish manually maintain this interface file.
// ================================================================================

package service

import (
	"context"
)

type (
	IInteractionsV1 interface {
		Interactions(ctx context.Context, interactionsReq, result interface{}) error
	}
)

var (
	localInteractionsV1 IInteractionsV1
)

func InteractionsV1() IInteractionsV1 {
	if localInteractionsV1 == nil {
		panic("implement not found for interface IInteractionsV1, forgot register?")
	}
	return localInteractionsV1
}

func RegisterInteractionsV1(i IInteractionsV1) {
	localInteractionsV1 = i
}

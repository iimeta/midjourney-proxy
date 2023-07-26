package interactions

import (
	"context"
	"github.com/iimeta/midjourney-proxy/internal/consts"
	"github.com/iimeta/midjourney-proxy/internal/service"
	"github.com/iimeta/midjourney-proxy/utility/logger"
	"github.com/iimeta/midjourney-proxy/utility/util"
)

type sInteractionsV1 struct{}

func init() {
	service.RegisterInteractionsV1(New())
}

func New() service.IInteractionsV1 {
	return &sInteractionsV1{}
}

func (s *sInteractionsV1) Interactions(ctx context.Context, interactionsReq, result interface{}) error {

	url := HOST(ctx) + consts.INTERACTIONS_PATH

	err := util.HttpPost(ctx, url, HEADER(ctx), interactionsReq, result)
	if err != nil {
		logger.Error(ctx, err)
		return err
	}

	return nil
}

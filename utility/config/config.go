package config

import (
	"context"
	"github.com/gogf/gf/v2/container/gvar"
	"github.com/gogf/gf/v2/frame/g"
	"github.com/iimeta/midjourney-proxy/utility/logger"
)

func Get(ctx context.Context, pattern string, def ...interface{}) (*gvar.Var, error) {

	value, err := g.Cfg().Get(ctx, pattern, def)
	if err != nil {
		return nil, err
	}

	return value, nil
}

func GetString(ctx context.Context, pattern string, def ...interface{}) string {

	value, err := Get(ctx, pattern, def)
	if err != nil {
		logger.Error(ctx, err)
	}

	return value.String()
}

func GetMapStrStr(ctx context.Context, pattern string, def ...interface{}) map[string]string {

	value, err := Get(ctx, pattern, def)
	if err != nil {
		logger.Error(ctx, err)
	}

	return value.MapStrStr()
}

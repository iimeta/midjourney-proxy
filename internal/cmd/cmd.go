package cmd

import (
	"context"
	"github.com/iimeta/midjourney-proxy/internal/controller/submit"
	"github.com/iimeta/midjourney-proxy/internal/controller/task"

	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/net/ghttp"
	"github.com/gogf/gf/v2/os/gcmd"
)

var (
	Main = gcmd.Command{
		Name:  "main",
		Usage: "main",
		Brief: "start http server",
		Func: func(ctx context.Context, parser *gcmd.Parser) (err error) {
			s := g.Server()
			s.SetServerRoot("./resource/iim-mobile/")
			s.Group("/api/midjourney", func(group *ghttp.RouterGroup) {
				group.Middleware(ghttp.MiddlewareHandlerResponse)
				group.Bind(
					submit.NewV1(),
					task.NewV1(),
				)
			})
			s.Run()
			return nil
		},
	}
)

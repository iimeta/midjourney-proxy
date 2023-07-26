package main

import (
	_ "github.com/iimeta/midjourney-proxy/internal/packed"

	_ "github.com/iimeta/midjourney-proxy/internal/logic"

	"github.com/gogf/gf/v2/os/gctx"

	"github.com/iimeta/midjourney-proxy/internal/cmd"
)

func main() {
	cmd.Main.Run(gctx.GetInitCtx())
}

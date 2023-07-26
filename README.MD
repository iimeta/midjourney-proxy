# MidJourney Proxy

代理 MidJourney 的 Discord 频道，实现API形式调用AI绘图

[![Release](https://img.shields.io/static/v1?label=release&message=v0.7.0&color=blue)](https://github.com/iimeta/midjourney-proxy/releases)
[![License](https://img.shields.io/static/v1?label=license&message=MIT&color=green)](https://github.com/iimeta/midjourney-proxy)

## 现有功能
- [x] 支持 Imagine 指令和相关U、V操作
- [x] 任务队列，默认队列10，并发3。可参考 [MidJourney订阅级别](https://docs.midjourney.com/docs/plans)

## 后续计划
- [ ] user-token 连接 wss，可以获取错误信息和完整功能
- [ ] 支持 Imagine、V、Blend 图片生成进度
- [ ] 支持 discord域名(server、cdn、wss)反代
- [ ] Imagine 时支持添加图片base64，作为垫图
- [ ] 支持 Blend(图片混合) 指令和相关U、V操作
- [ ] 支持 Describe 指令，根据图片生成 prompt
- [ ] 支持中文 prompt 翻译
- [ ] 支持 Reroll 操作
- [ ] 支持配置账号池，分发绘图任务

## 使用前提
1. 注册 MidJourney，创建自己的频道，参考 https://docs.midjourney.com/docs/quick-start
2. 获取用户Token、服务器ID、频道ID：[获取方式](https://www.yuque.com/xiaoqi-vgsag/bn9t8h/wzg5kluuzzgd22m7)

## 风险须知
1. 推荐使用Bot模式, 避免封号

## 快速上手
1. 到 [Releases](https://github.com/iimeta/midjourney-proxy/releases) 下载最新版本
2. 解压后, 进入 midjourney-proxy/manifest/config 目录, 把 config.example.yaml 拷贝或修改文件名为 config.yaml 
3. 按 config.yaml 中配置项的注释, 修改对应参数
4. Linux环境, 到 midjourney-proxy/bin 目录下, 执行: chmod +777 ./*
5. Linux启动服务, 执行: ./start.sh
6. Windows启动服务, 双击: start.bat
7. 访问: http://ip:8000/, 如: http://localhost:8000/

## 使用帮助
<img src="https://raw.githubusercontent.com/iimeta/midjourney-proxy/main/resource/images/UseDrawingMode.png" alt="绘图模式"/>

## 作者
 <img src="https://raw.githubusercontent.com/iimeta/midjourney-proxy/main/resource/images/Author.png" width="320" alt="微信二维码"/>

## 示例项目
- [IIM](https://iim.ink/m) : 智能IM, 支持ChatGPT、Midjourney、文心一言、讯飞星火...

![Star History Chart](https://api.star-history.com/svg?repos=iimeta/midjourney-proxy&type=Date)

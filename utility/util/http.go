package util

import (
	"context"
	"github.com/gogf/gf/v2/encoding/gjson"
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/os/gctx"
	"github.com/iimeta/midjourney-proxy/utility/logger"
	"net/http"
	"net/url"
	"time"
)

var ProxyOpen bool
var ProxyURL string

func init() {

	ctx := gctx.New()

	proxy_open, err := g.Cfg().Get(ctx, "http.proxy_open")
	if err != nil {
		logger.Error(ctx, err)
	}
	ProxyOpen = proxy_open.Bool()

	proxy_url, err := g.Cfg().Get(ctx, "http.proxy_url")
	if err != nil {
		logger.Error(ctx, err)
	}

	ProxyURL = proxy_url.String()
}

func HttpGet(ctx context.Context, url string, header map[string]string, data g.Map, result interface{}, cookies ...map[string]string) error {

	logger.Infof(ctx, "HttpGet url: %s, header: %+v, data: %+v", url, header, data)

	client := g.Client().Timeout(60 * time.Second)
	if header != nil {
		client.SetHeaderMap(header)
	}

	if len(cookies) > 0 {
		client.Cookie(cookies[0])
	}

	response, err := client.Get(ctx, url, data)
	if err != nil {
		logger.Error(ctx, err)
		return err
	}

	defer func() {
		err = response.Close()
		if err != nil {
			logger.Error(ctx, err)
		}
	}()

	bytes := response.ReadAll()
	logger.Infof(ctx, "HttpGet url: %s, header: %+v, data: %+v, response: %s", url, header, data, string(bytes))

	if bytes != nil && len(bytes) > 0 {
		err = gjson.Unmarshal(bytes, result)
		if err != nil {
			logger.Error(ctx, err)
			return err
		}
	}

	return nil
}

func HttpPost(ctx context.Context, url string, header map[string]string, data, result interface{}) error {

	logger.Infof(ctx, "HttpPost url: %s, header: %+v, data: %+v", url, header, data)

	client := g.Client().Timeout(60 * time.Second)
	if header != nil {
		client.SetHeaderMap(header)
	}

	if ProxyOpen && len(ProxyURL) > 0 {
		client.SetProxy(ProxyURL)
	}

	response, err := client.ContentJson().Post(ctx, url, data)
	if err != nil {
		logger.Error(ctx, err)
		return err
	}

	defer func() {
		err = response.Close()
		if err != nil {
			logger.Error(ctx, err)
		}
	}()

	bytes := response.ReadAll()
	logger.Infof(ctx, "HttpPost url: %s, header: %+v, data: %+v, response: %s", url, header, data, string(bytes))

	if bytes != nil && len(bytes) > 0 {
		err = gjson.Unmarshal(bytes, result)
		if err != nil {
			logger.Error(ctx, err)
			return err
		}
	}

	return nil
}

func HttpDownloadFile(ctx context.Context, fileURL string, useProxy ...bool) []byte {

	logger.Infof(ctx, "HttpDownloadFile fileURL: %s", fileURL)

	client := g.Client().Timeout(600 * time.Second)

	transport := &http.Transport{}

	if ProxyOpen && len(ProxyURL) > 0 && (len(useProxy) == 0 || useProxy[0]) {

		logger.Infof(ctx, "HttpDownloadFile ProxyURL: %s", ProxyURL)

		proxyUrl, err := url.Parse(ProxyURL)
		if err != nil {
			logger.Error(ctx, err)
		}

		transport.Proxy = http.ProxyURL(proxyUrl)
		client.Transport = transport
	}

	return client.GetBytes(ctx, fileURL)
}

func GetProxy(ctx context.Context) func(*http.Request) (*url.URL, error) {

	var proxy func(*http.Request) (*url.URL, error)

	if ProxyOpen && len(ProxyURL) > 0 {

		logger.Infof(ctx, "ProxyURL: %s", ProxyURL)

		proxyURL, err := url.Parse(ProxyURL)
		if err != nil {
			logger.Error(ctx, err)
			return nil
		}

		return http.ProxyURL(proxyURL)
	}

	return proxy
}

func GetProxyTransport(ctx context.Context) *http.Transport {

	transport := &http.Transport{}

	transport.Proxy = GetProxy(ctx)

	return transport
}

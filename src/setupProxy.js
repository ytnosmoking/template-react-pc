

const { createProxyMiddleware } = require('http-proxy-middleware')


module.exports = (app) => {
  app.use(createProxyMiddleware('/api', {
    target: 'http://whrdd.f3322.net:60091',
    secure: false,
    changeOrigin: true,
    pathRewrite: {
      "^/api": ""
    }
  }))
}
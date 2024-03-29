/* eslint-disable @typescript-eslint/no-var-requires */
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function proxy(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://example.com',
      changeOrigin: true,
    }),
  );
};

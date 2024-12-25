import { createProxyMiddleware } from 'http-proxy-middleware';

export default function proxy(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://example.com',
      changeOrigin: true,
    }),
  );
}

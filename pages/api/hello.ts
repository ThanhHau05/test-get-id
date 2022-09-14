// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export {}
const { createProxyMiddleware } = require("http-proxy-middleware")


module.exports = app => {
    app.use(
     createProxyMiddleware('/Profile.NguyenThanhHau', {
                target : "https://www.facebook.com",
                changeOrigin : true
     })
    )
}

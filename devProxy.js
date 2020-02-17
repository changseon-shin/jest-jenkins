module.exports = {
    "/api/": {
        target: process.env.PROXY_URL || 'https://yap-api.dev.yanolja.in',
        changeOrigin: true
    },
    "/v1/": {
        target: process.env.PROXY_URL || 'https://yap-api.dev.yanolja.in',
        changeOrigin: true
    }
};
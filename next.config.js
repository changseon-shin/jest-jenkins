const isProd = process.env.API_ENV === 'staging' || process.env.API_ENV === 'production';

module.exports = {
    publicRuntimeConfig: {
        IMAGE_URL: isProd ? 'https://static.yap.yanolja.com/yap-admin' : 'https://dev-static.yap.yanolja.com/yap-admin',
        PROXY_URL: process.env.PROXY_URL || 'https://yap-api.dev.yanolja.in',
    }
};
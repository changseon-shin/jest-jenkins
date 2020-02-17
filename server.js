const express = require('express');
const next = require('next');
const useragent = require('express-useragent');
const routes = require('./routes');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handler = routes.getRequestHandler(app);
const devProxy = require('./devProxy');

require('console-stamp')(console, { pattern: 'dd/mm/yyyy HH:MM:ss.l' });

app.prepare().then(() => {
    const server = express();
    const proxyMiddleware = require("http-proxy-middleware");
    Object.keys(devProxy).forEach(function(context) {
        server.use(proxyMiddleware(context, devProxy[context]));
    });

    server.get('/register/error/:message', registerErrorCallback);
    server.get('/health', (req, res) => res.sendStatus(200));
    // THIS IS THE DEFAULT ROUTE, DON'T EDIT THIS
    server.get('*', defaultRouteCallback);

    const port = process.env.PORT || 3000;
    server.use(handler).listen(port, err => {
        if (err) throw err;
        console.log(`> 🚀 Ready on port ${port}...`);
    });
}).catch(ex => {
    console.error(ex.stack);
    process.exit(1);
});

const defaultRouteCallback = (req, res) => {
    const source = req.headers['user-agent'],
        ua = useragent.parse(source),
        os = ua.os,
        browser = ua.browser,
        originalUrl = req.originalUrl;
    if(!originalUrl.match(/_next/) && !originalUrl.match(/static/)){
        console.info(`User os is ${os}`);
        console.info(`User browser is ${browser}`);
        console.info(`Requsted ${originalUrl}`);
    }
    return handler(req, res);
};

const registerErrorCallback = (req, res) => {
    try{
        console.error(req.params.message);
        return res.json({
            code : 200,
            message : "성공"
        });
    }catch (error) {
        console.error(error);
        return res.json({
            code : 500,
            message : "서버에러"
        })
    }
};

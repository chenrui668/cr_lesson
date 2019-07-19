const Koa = require('./lib/application.js');
const delegaes = require('delegates');
const app = new Koa();

app.listen(3000, () => {
    console.log('server is running 3000');
})
const ctx = {
    request: {
        url: 'baidu.com'
    },
    response: {
        body: 123
    }
}
delegaes(ctx, 'request').access('url');
delegaes(ctx, 'response').access('body');
console.log(ctx.url === ctx.request.url);
ctx.body = 456;
console.log(ctx);

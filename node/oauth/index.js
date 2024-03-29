const path = require('path');
const Koa = require('koa'); // node 开发框架
// 静态资源  动态资源(数据库)
const server = require('koa-static');
const route = require('koa-route');
const axios = require('axios');
const main = server(path.join(__dirname, '/public'));
const clientID = 'afc527fc8badfe81fd0c';
const clientSecret = 'eccaefaeda9b689f342e699a17a6db83f88c9cf9';
// 从前端思维切到后端思维
const oauth = async ctx => {
    // 可以await 数据库
    // await 请求
    // console.log('----------------');
    // const str = await new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //        resolve('等了三秒钟') 
    //     }, 3000);
    // })
    // console.log(str);
    // code => token
    const requestToken = ctx.request.query.code;
    const token_url = 'https://github.com/login/oauth/access_token?' +
    `client_id=${clientID}&` +
    `client_secret=${clientSecret}&` +
    `code=${requestToken}`;
    console.log(token_url);
    const tokenResponse = await axios({
        method: 'post',
        url: token_url,
        headers: {
            accept: 'application/json'
        }
    });
    const accessToken = tokenResponse.data.access_token;
    console.log(accessToken);
    const result = await axios({
        method: 'get',
        url: 'https://api.github.com/user',
        headers: {
            accept: 'application/json',
            Authorization: `token ${accessToken}`
        }
    });
    const avatar_url = result.data.avatar_url;
    ctx.response.redirect(`/welcome.html?avatar_url=${avatar_url}`);
    // ctx.response.redirect('/welcome.html');
}
// public 让用户可以访问到
// 路由 网站时提供资源的，
const app = new Koa(); // 后端应用
app.use(main);
app.use(route.get('/oauth/redirect',oauth));
app.listen(8080);
## 跨域
浏览器的安全策略，
协议 域名 端口 有一个不一致的话就存在跨域问题
https:/www.afsdf.com/a  
https:/www.afsdf.com/b

 ## 跨域的解决
 ## 1 cors  
 cross origin resource share 全称

 -   是一个标准，规定了一些 http 的首部字段，让服务器允许哪些网站可以访问 加在头部的
 -   规定，如果是非简单请求，浏览器会发一个预检请求，从服务器端知道是否允许跨域，如果允许 才会发出正式的请求 
 -   非简单请求 简单请求

 ## 2  JSONP 原理
 - script 标签 可以跨域
 - 加载进来会被当做 js 执行
 - 后端 先获取到前端发出的 callback 在callback 里面  插入自己想要返回的内容
 - 前端 拿到返回的内容当做 js 执行
getUser({
    name:'abc',age:15
})


- 预先定义好一个函数
- 缺点：只能 get 请求
- 写一个promise 风格的jsonp函数 




- param = {type:'man',age:18}
 -  jsonp(url,param={}).then(res=>{
     console.log(res)
 })


 ##思路
 1. 一个全局的方法
 2. 插入一个 script 标签，根据方法名 param 拼接url 
 3. 根据js的加载情况判断请求成功与否 返回数据
 4. script 标签上有事件 
 

 ## 3 iframe
 可以引入一个跨域的html  
 1. 引入和后端接口 同源的iframe 
2. 该iframe 不存在跨域 可以请求 
3. 和 iframe 通信 postMessage message 

iframe 的onload 会计入 window.parent.postMessage


##  iframe另外一种方法
同一个页面里面的 所有 iframe 共享 window.name 

## server 后
koa-static 映射过 /url
## static 前端
static live-server
前后端 通信 fe-iframe 文件 收到后端的结果 middle 后端 static iframe 
## window.name
1. 上一步一样 
2. iframe 请求 结果放在一个共享的window.name 上面
3. fe-frame.html 得到请求的结果
4. 请求完成后 跳到一个第三方的页面 执行定义在 fe-iframe 里面的回调

## 代理 
代理工具
webpack-dev-server
live-server
反向代理:   live-server --proxy=/api:localhost:3000/api/
 live-server --proxy=/api:localhost:4000/api/ 有可能
 拿到结果。
 对于客户顿来说 最终请求的地方是未知的。


 正向代理
 对于服务端来说 客户端是位置的


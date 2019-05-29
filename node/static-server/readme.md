## static 
koa-static
为什么要配置。
静态资源：图片 html css js 存到服务器上
不会随服务的运行改变内容。
assets 资源

## path
path.join 将路径的各个部分连接起来 处理各个平台的分割符号
Windows： \  Linux  /

## formidabel
fields 非[type='file'] 内容都会到fields上
files [type="file"] 内容会到files上

## 静态资源服务
双击打开
file://XXXXX 本地文件读取
服务器： 
http://loaclhost:9090/
<!-- 访问图片的时候 发了一个请求 -->
html 里面的 引入的 图片 js css 都会发出一个请求。
然后 这些都是静态资源 所以 url 和服务器磁盘路径 一一对应。
1. 有 index.html 的时候 自动打开 / 自己加上 index.html
2. 没有 列出所有文件 文件夹 fs.readDir()
用 koa-static 的作用就是 在 html 里面正确引入 你指定目录下面的资源
处理static 目录下面的 资源 映射为 请求路径
/static/2.png 返回 2.png 的内容
(koa-static)
业内擅长静态资源的服务器： Nginx
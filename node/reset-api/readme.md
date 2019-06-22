fullstack 全栈
Front Engineer 前端 
Backend  后端  /api

restful api 
浏览器与服务器通信方式的一种设计风格

- restful 的世界里, 一切皆资源
- url 来唯一定位资源的识别符
    /posts/:id/comments
- 加一条comment 怎么办？ comments/2
    {
        id: 2,
        body: '好巧，你那边也在下雨',
        postId: 1
    }
    /comments 设计好URL  POST
- 设计有意义的URL
    资源  状态改变 
    修改一下内容
    PUT  /comments/2 body: '最美不过下雨天， 一起与你...'
    操作     SQL 方法    HTTP动词
    CREATE   INSERT      POST
    READ     SELECT      GET
    UPDATE   UPDATE      PUT/PATCH {body: ''} PUT(修改全部) PATCH(修改一部分)

    状态切换， 使用定义的谓语动词
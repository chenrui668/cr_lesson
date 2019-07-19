const Emitter = require('events');
const http = require ('http');
const context = require('./context')
        context.request = Object.create(this.request);

        const request = require('./request')
        const response = require('./response')

module.exports = class Application extends Emitter{


    constructor() {
        super() ;
        this.context = Object.create(context)
        this.reqest = Object.create(request)
        this.response = Object.create(response)


    }
    use() {}
    listen(...args){
        const server = http.createServer(this.callback())
        server.listen(...args);
    }
    callback(){
        const handleRequest = (req,res)=>{
            const ctx = this.createContext(req,res)
        }
        return handleRequest;
    }
    createContext(req,res){
        const context  = Object.create(this.context);
        // ctx.request.url ctx.url
        // {}
        // ctx.body =''
        const request = 
        context.request = Object.create(this.request);
        const response = 
        context.responce = Object.create(this.responce);

        context.req = req;
        context.res = res;
        return context;
    }
}

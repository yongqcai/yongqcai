//1. 引入http模块
var http = require("http");

//2. 用http模块创建服务
/**
 * req 获取url信息（request）
 * res 浏览器返回响应信息
 */
http.createServer(function(req,res){
    //设置HTTP头部，状态码是200，文件类型是html，字符集是utf-8
    res.writeHead(200,{
        "Content-Type":"text/html;charset=UTF-8"
    })

    //往页面打印
    res.write('<h1 style="text-align:center">hello Node.JS</h1>')

    //响应结束
    res.end()
}).listen(3000) //监听端口

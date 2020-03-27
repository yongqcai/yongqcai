//1. 引入url模块
var url = require("url");

//2. 引入http模块
var http = require("http");

//3. 用http模块创建服务
/**
 * req 获取url信息（request）
 * res 浏览器返回响应信息
 */
http.createServer(function (req, res) {

    //4. 获取服务器请求
    /**
     * 访问地址是：http://localhost:3000/?userName=jsliang&userAge=23
     * 如果你执行 console.log(req.url)，它将执行两次，分别返回下面的信息：
     * /  ?userName=jsliang&userAge=23
     * /  /favicon.ico
     * 这里为了防止重复执行，所以排除 req.url == /favicon.ico 的情况
     */
    if (req.url != '/favicon.ico') {
        console.log(url)
        /**
         { 
         Url: [Function: Url],
            parse: [Function: urlParse], // 获取地址信息
            resolve: [Function: urlResolve], // 追加或者替换地址
            resolveObject: [Function: urlResolveObject],
            format: [Function: urlFormat], // 逆向 parse，根据地址信息获取原 url 信息
            URL: [Function: URL],
            URLSearchParams: [Function: URLSearchParams],
            domainToASCII: [Function: domainToASCII],
            domainToUnicode: [Function: domainToUnicode] 
         }
        */

        //5. 使用url的 parse 方法
        /**
         * parse 方法需要两个参数：
         * 第一个参数是地址
         * 第二个参数是 true 的话表示把 get 传值转换成对象
         */

        var result = url.parse(req.url, true)

        /**
         * Url {
         *   protocol: null,
         *   slashes: null,
         *   auth: null,
         *   host: null,
         *   port: null,
         *   hostname: null,
         *   hash: null,
         *   search: '?userName=jsliang&userAge=23',
         *   query: { userName: 'jsliang', userAge: '23' },
         *   pathname: '/',
         *   path: '/?userName=jsliang&userAge=23',
         *   href: '/?userName=jsliang&userAge=23' }
         */

    }
    //设置HTTP头部，状态码是200，文件类型是html，字符集是utf-8
    res.writeHead(200, {
        "Content-Type": "text/html;charset=UTF-8"
    })

    //往页面打印
    res.write('<h1 style="text-align:center">hello Node.JS</h1>')

    //响应结束
    res.end()
}).listen(3000) //监听端口

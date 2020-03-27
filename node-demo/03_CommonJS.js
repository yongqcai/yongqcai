var http = require("http");

var tools1 = require("./03_tool-add");

var tools2 = require("03_tool-multiply");

/**
 * 通过 package.json 来引用文件
 * 1. 通过在 jsliang-module 中 npm init --yes 来生成 package.json 文件
 * 2. package.json 文件中告诉了程序入口文件为 ："main": "tools.js",
 * 3. Node 通过 require 查找 jsliang-module，发现它有个 package.json
 * 4. Node 执行 tools.js 文件
 */
var tools3 = require("jsliang-module");

http.createServer(function (req, res) {

    res.writeHead(200, {
        "content-Type": "text/html;charset=UTF-8"
    })

    res.write("<h1 style='text-align:center'>hello NodeJS</h1>");

    console.log('tools1', tools1.add(1, 2, 3))
    console.log('tools2', tools2.multiply(1, 3, 3))
    console.log('tools3',tools3.add(4, 5, 6))
    /**
     * Console：
     * 6
     * 6
     * 这里要记得 Node 运行过程中，它请求了两次，
     * http://localhost:3000/ 为一次，
     * http://localhost:3000/favicon.ico 为第二次
     */
    res.end()
}).listen(3000)
var http = require("http");
var fs = require("fs");
var url = require("url");
var path = require("path");
http.createServer(function (req, res) {

    //获取响应路径
    let pathName = req.url;

    //默认加载加载路径
    if (pathName == '/') {
        pathName = 'index.html'
    }
    console.log('pathName',pathName)
    // 获取文件的后缀名
    let extName = path.extname(pathName);
    console.log('extName',extName)

    //过滤 /favicon.ico 的请求
    if (pathName != '/favicon.ico') {
        // 获取 08_WebService 下的 index.html
        fs.readFile("./08_WebService/" + pathName, (err, data) => {
            if (err) {

                //如果不存在这个文件
                console.log("404 Not Found!")
                fs.readFile("./08_WebService/404.html", (errorNotFound, dataNotFound) => {
                    if (errorNotFound) {
                        console.log(errorNotFound);
                    } else {
                        res.writeHead(200, {
                            "Content-Type": "text/html;charset='utf-8'"
                        })
                        res.write(dataNotFound)
                        res.end();
                    }
                })

                return
            } else {
                // 获取文件类型
                let ext = getExt(extName);
                console.log('ext',ext)
                // 设置请求头
                res.writeHead(200, {
                    "Content-Type": ext + "; charset='utf-8'"
                });
                // 读取写入文件
                res.write(data);
                // 结束响应
                res.end();
            }
        })
    }
}).listen(8080)

// 获取后缀名
getExt = (extName) => {
    let data = fs.readFileSync("./08_ext.json");
    let ext = JSON.parse(data.toString())
    return ext[extName]
}
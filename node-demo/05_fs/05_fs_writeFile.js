//  1. fs.stat
let fs = require('fs');

//创建写入文件
/**
 * filename (String) 文件名称
 * data (String | Buffer) 将要写入的内容，可以是字符串或者 buffer 数据。
 * · encoding (String) 可选。默认 'utf-8'，当 data 是 buffer 时，该值应该为 ignored。
 * · mode (Number) 文件读写权限，默认 438。
 * · flag (String) 默认值 'w'。
 * callback { Function } 回调，传递一个异常参数 err。
 */
fs.writeFile('../index.js', 'Hello jsliang', (err) => {
    if (err) {
        console.log(err);
        return false;
    } else {
        console.log('写入成功！');
    }
})

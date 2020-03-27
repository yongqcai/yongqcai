//  1. fs.stat
let fs = require('fs');
//追加文件
fs.appendFile('../index.js', '这段文本是要追加的内容', (err) => {
    if (err) {
        console.log(err);
        return false;
    } else {
        console.log("追加成功");
    }
})
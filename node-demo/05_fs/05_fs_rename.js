//  1. fs.stat
let fs = require('fs');
//重命名
fs.rename('../index.js', 'jsliang.js', (err) => {
    if (err) {
        console.log(err);
        return false;
    } else {
        console.log("重命名成功！");
    }
})

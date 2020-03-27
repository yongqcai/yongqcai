//  1. fs.stat
let fs = require('fs');

//读取文件
// fs.stat('../index.js', (error, stats) => {
//     if (error) {
//         console.log(error);
//         return false;
//     } else {
//         console.log(stats);
//         /**
//          * Console：
//          * Stats {
//          *  dev: 886875,
//          *  mode: 33206,
//          *  nlink: 1,
//          *  uid: 0,
//          *  gid: 0,
//          *  rdev: 0,
//          *  blksize: undefined,
//          *  ino: 844424931461390,
//          *  size: 284,
//          *  blocks: undefined,
//          *  atimeMs: 1542847157494,
//          *  mtimeMs: 1543887546361.2158,
//          *  ctimeMs: 1543887546361.2158,
//          *  birthtimeMs: 1542847157493.663,
//          *  atime: 2018-11-22T00:39:17.494Z,
//          *  mtime: 2018-12-04T01:39:06.361Z,
//          *  ctime: 2018-12-04T01:39:06.361Z,
//          *  birthtime: 2018-11-22T00:39:17.494Z }
//          */

//         console.log(`文件：${stats.isFile()}`);
//         // Console：文件：true

//         console.log(`目录：${stats.isDirectory()}`);
//         // Console：目录：false

//         return false;
//     }
// })

// 图片上传
fs.stat('upload', (err, stats) => {
    // 判断有没有 upload 目录
    if (err) {
        // 如果没有
        fs.mkdir('upload', (error) => {
            if (error) {
                console.log(error);
                return false;
            } else {
                console.log("创建 upload 目录成功！");
            }
        })
    } else {
        // 如果有
        console.log(stats.isDirectory());
        console.log("有 upload 目录，你可以做更多操作！");
    }
})

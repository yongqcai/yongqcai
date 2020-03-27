var mysql = require("mysql");

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'xb261233',
    database: 'test-sql'
})

connection.connect();

let addSql = "INSERT INTO demo_user(id,name,age) VALUES(3,?,?)"
let addSQlParmas = ['yongqcai', '23'];

connection.query(addSql, addSQlParmas, function (err, res) {
    if (err) {
        console.log('新增错误：')
        console.log(err);
        return
    } else {
        console.log('新增成功：')
        console.log(res)
    }
})

connection.end();
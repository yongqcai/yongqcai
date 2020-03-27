var mysql = require("mysql");

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'xb261233',
    database: 'test-sql'
})

connection.connect();

var readSql = "SELECT * FROM demo_user";

connection.query(readSql,function(err,res){
    if(err){
        console.log("查询错误：")
        console.log(err)
    }else{
        console.log("查询成功：")
        console.log(res)
    }
})

connection.end();
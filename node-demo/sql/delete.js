var mysql = require("mysql");

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'xb261233',
    database: 'test-sql'
})

connection.connect();

var delsql = "DELETE FROM demo_user where id = 0"

connection.query(delsql,function(err,res){
    if(err){
        console.log("删除错误：")
        console.log(err)
    }else{
        console.log("删除成功：")
        console.log(res)
    }
})

connection.end();
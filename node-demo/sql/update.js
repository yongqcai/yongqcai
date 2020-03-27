var mysql = require("mysql");

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'xb261233',
    database: 'test-sql'
})

connection.connect();

let updateSql = "UPDATE demo_user SET name = ?,age = ? WHERE Id = ?";
let updateSqlParmas = ['caiXiaobai','24',1];

connection.query(updateSql,updateSqlParmas,function(err,res){
    if(err){
        console.log("更新错误：")
        console.log(err)
    }else{
        console.log("更新成功：")
        console.log(res)
    }
})

connection.end();
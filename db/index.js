const mysql = require('mysql');

const connection = mysql.createConnection({
  host:'127.0.0.1',
  user:'root',
  password:'',
  database:'blog'
})

//连接数据库
connection.connect();


module.exports = connection;
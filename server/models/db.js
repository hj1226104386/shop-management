/**
 * Created by huangjin on 2017/5/13.
 * 专门用户数据库连接和其他操作
 */
"use strict";

var mysql  = require('mysql');
//数据库连接,直接一次性建立含有多个连接的连接池,需要的时候取出连接
var pool  = mysql.createPool({
    connectionLimit : 10,//一次性创建10个连接
    host     : '127.0.0.1',
    user     : 'root',
    password : 'root',
    database : 'temp'
});
//数据库查询
module .exports.query = function (sql,params,callback) {
    pool.getConnection(function(err, connection) {
        // Use the connection
        connection.query(sql,params, function (err, data) {
            console.log("当前执行的sql语句为:"+sql+'参数为:'+params);
            if (err) throw err;
            callback(err,data);//传一个回调函数处理后续操作
            // And done with the connection.
            connection.release();
        });
    });
}
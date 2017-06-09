/**
 * Created by huangjin on 2017/6/4.
 * 封装用户数据
 * 这里才是真正执行数据库增删改查的操作
 */

"use strict";
let db = require('./db.js');//引入数据库连接操作模块

//将用户的数据保存进对象
function User(users) {
    if(users){//传了参就保存用户信息,否则不做操作
        this.username = users.username;
        this.password = users.password;
        this.email = users.email;
        this.user_id = users.user_id;//用户id
    }

}

//查找用户名
User.prototype.findUserName = function(callback){
    //?表示暂时未知,到时候由紧跟后面的一个参数填充进来
    db.query('select * from user where username = ?',[this.username],callback);
};
//查找邮箱
User.prototype.findEmail = function(callback){
    db.query('select * from user where email = ?',[this.email],callback);
};
//保存用户信息到数据库
User.prototype.saveInfo = function(callback){
    db.query('insert into user (username,password,email,is_vip) values (?,?,?,0)',[this.username,this.password,this.email],callback);
}
//根据用户id查找用户
User.prototype.findUserById = function(callback){
    db.query('select * from user where id = ?',[this.user_id],callback);
}
//查找所有商户账户信息,不查询管理员账户
User.prototype.findAlltenants = function (callback) {
    db.query('SELECT name,gender,username,status,shopname FROM `user` WHERE is_vip = "0"',callback);
}

//导出User对象
module.exports = User;
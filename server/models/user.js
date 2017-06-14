/**
 * Created by huangjin on 2017/6/4.
 * 封装用户数据
 * 这里才是真正执行数据库增删改查的操作
 */

"use strict";
let db = require('./db.js');//引入数据库连接操作模块

//将用户的数据保存进对象
function User(users) {
    if (users) {//传了参就保存用户信息,否则不做操作
        this.username = users.username;
        this.password = users.password;
        this.email = users.email;
        this.user_id = users.user_id;//用户id
        this.id = users.id;
        this.shopname = users.shopname;
        this.gender = users.gender;
        this.age = users.age;
        this.name = users.name;
        this.phone = users.phone;
        this.address = users.address;
        this.newPsd = users.newPsd;
        this.oldPsd = users.oldPsd;
        this.md5New = users.md5New;
    }

}

//查找用户名
User.prototype.findUserName = function (callback) {
    //?表示暂时未知,到时候由紧跟后面的一个参数填充进来
    db.query('select * from user where username = ?', [this.username], callback);
};
//查找邮箱
User.prototype.findEmail = function (callback) {
    db.query('select * from user where email = ?', [this.email], callback);
};
//保存用户信息到数据库
User.prototype.saveInfo = function (callback) {
    db.query('insert into user (username,password,email,is_vip) values (?,?,?,0)', [this.username, this.password, this.email], callback);
}
//根据用户id查找用户
User.prototype.findUserById = function (callback) {
    db.query('select * from user where id = ?', [this.user_id], callback);
}
//根据用户id查找用户2
User.prototype.findUser = function (callback) {
    db.query('select * from user where id = ?', [this.id], callback);
}
//查找所有商户账户信息,不查询管理员账户
User.prototype.findAlltenants = function (callback) {
    db.query('SELECT id,name,username,status,shopname FROM `user` WHERE is_vip = "0"', callback);
}
//删除指定用户名的账户信息
User.prototype.deleteOne = function (callback) {
    db.query('delete from user where id = ?', [this.id], callback);
}

//更新指定用户名的账户信息(恢复)
User.prototype.recover = function (callback) {
    db.query('UPDATE `user` SET status = "0" where id = ?', [this.id], callback);
}
//更新指定用户名的账户信息(禁用)
User.prototype.forbidden = function (callback) {
    db.query('UPDATE `user` SET status = "1" where id = ?', [this.id], callback);
}
//获取所有用户信息
User.prototype.getAllMsg = function (callback) {
    db.query('SELECT id,name,gender,status,shopname,age,phone,email,address FROM `user` WHERE is_vip = "0"', callback);
}
//插入一条新用户信息
User.prototype.addNewTenant = function (callback) {
    db.query('insert into user (shopname,gender,age,name,phone,email,address) values (?,?,?,?,?,?,?)', [
        this.shopname, this.gender, this.age, this.name, this.phone, this.email, this.address
    ], callback);
}
//更新用户多条信息
User.prototype.updateManyMsg = function (callback) {
    db.query('UPDATE `user` SET shopname = ?,name=?,age=?,gender=?,phone=?,email=?,address=? where id = ?', [this.shopname,this.name,this.age,this.gender,this.phone,this.email,this.address,this.id], callback);
}
//查询一个商户的所有商品(不分类)
User.prototype.getOneTenantGoods = function (callback) {
    db.query('SELECT * FROM `user` u LEFT JOIN classfy cla ON cla.clsid = u.id LEFT JOIN detail det ON det.detailId = cla.id WHERE u.id = ?', [this.id], callback);
}
//查询一个商户的所有用户订单(不分类)
User.prototype.getOneTenantOrders = function (callback) {
    db.query('SELECT* FROM `user` u LEFT JOIN `order` o ON o.orderId = u.id WHERE u.id = 2;', [this.id], callback);
}
//获取所有用户信息
User.prototype.getAllTenants = function (callback) {
    db.query('SELECT id,shopname,address FROM `user` WHERE is_vip = "0"', callback);
}
//根据用户id查找自己
User.prototype.findMyself = function (callback) {
    db.query('select * from user where id = ?', [this.id], callback);
}
//更新指定用户名的账户信息(禁用)
User.prototype.updatePsd = function (callback) {
    db.query('UPDATE `user` SET password = ? where id = ?', [this.md5New,this.id], callback);
}
//导出User对象
module.exports = User;
/**
 * Created by huangjin on 2017/6/4.
 */
"use strict";

//这里做的是具体处理用户的请求;
const utils = require('utility');//md5加密
const User = require('../models/user.js');

//注册
module.exports.doRegister = function (req, res, next) {
    // if(err) throw err;
    //拿到请求体的参数,传入到数据库操作的函数中
    let username = req.body.username;
    let password = req.body.password;
    let email = req.body.email;
    console.log(req.body);
    let formUser = new User({username: username, password: password, email: email});
    //先查找用户名是否存在
    console.log('请求继续到这里了')
    formUser.findUserName(function (err, data) {
        var queryedUserData = '';
        if (err) throw err;
        console.log(data);//打印查询结果
        if (data.length != 0) {//说明查询到数据;
            queryedUserData = data[0];
            return res.send({
                msg: '用户名已存在!'
            })
            res.end();
        }
        //继续判断邮箱是否存在
        formUser.findEmail(function (err, data) {
            if (err) throw err;
            console.log(data);//打印查询结果
            if (data.length != 0) {//说明查询到数据;
                return res.send({
                    msg: '邮箱已被注册!'
                })
                res.end();
            }

            //插入数据
            //邮箱和用户名都不重复,保存用户,保存前先加密
            formUser.password = utils.md5(formUser.password);
            formUser.saveInfo(function (err, data) {//插入数据的时候会返回主键id信息
                //拿到返回的主键id信息
                var getInsertId = data.insertId;
                if (err) throw err;
            //至此说明用户注册成功了,将信息写入session和cookie
                var age = 1000 * 60 * 60 * 24 * 7;//设置cookie生命周期
                var base64Psd = utils.base64encode(password);//将密码转换城base64形式
                res.cookie('username',username,{maxAge: age});
                res.cookie('password', base64Psd, {maxAge: age});
                req.session.user_id = getInsertId;
                req.session.username = username;
                req.session.is_vip = 0;
                return res.send({
                    msg: '恭喜您,注册成功!'
                })
                res.end();
            })

        })
    })
};
module.exports.beforeLogin = function (req, res, next) {
    // console.log(req.session.User)
    //显示登录页之前就要判断cookie
    var obj = {};
    console.log('查看预请求时是否有cookie:' + req.cookies.remember_me)
    if (req.cookies.remember_me) {//判断请求有没有携带相关cookie,注意这里有个坑,不能判断cookie是否有值
        console.log('带了相关cookie')
        var username = req.cookies.username;
        var password = req.cookies.password;
        var remember_me = req.cookies.remember_me;
        password = utils.base64decode(password);//将密码解密成utf-8格式
        obj = {
            username:username, password:password, remember_me:remember_me
        }
        return res.send(obj);
    } else {
        console.log('没有带相关cookie');
        //没有携带cookie,说明不记住我,则清空cookie
        res.cookie('username', {maxAge: -1});
        res.cookie('password', {maxAge: -1});
        res.cookie('remember_me', {maxAge: -1});
        res.end();
    }


}
//处理登录逻辑
module.exports.doLogin = function (req, res, next) {
    //拿到请求体的参数,传入到数据库操作的函数中
    let username = req.body.username;
    let password = req.body.password;
    let remember_me = req.body.remember_me;
    console.log('登录时看rem是否传到后台' + remember_me)
    let isVip = req.body.vip;
    let formUser = new User({username: username, password: password, remember_me: remember_me});
    //先查找用户名是否存在
    formUser.findUserName(function (err, data) {
        if (err) throw err;
        var getData = data[0];
        console.log('我是getData:' + getData);
        console.log(data);//打印查询结果
        if (data.length = 0) {//说明查询到数据;
            return res.send({
                msg: '用户名或密码错误!'
            })
            res.end();
        }
        //判断账号是否是管理员账号
        if (isVip != 0) {//说明是通过管理员页面登录
            if (getData.is_vip != 1) {
                return res.send({
                    msg: '您不是管理员!'
                })
                res.end();
            }
        }

        //判断密码
        formUser.password = utils.md5(formUser.password);
        if (getData.password != formUser.password) {
            return res.send({
                msg: '用户名或密码错误!'
            })
            res.end();
        }

        //判断是否记住我
        console.log('remember_me:' + remember_me);
        if (remember_me) {//说明勾选了记住我,则返回cookie
            var age = 1000 * 60 * 60 * 24 * 7;//设置cookie生命周期
            res.cookie('username', username, {maxAge: age});
            var base64Psd = utils.base64encode(password);//将密码转换城base64形式
            res.cookie('password', base64Psd, {maxAge: age});
            res.cookie('remember_me', remember_me, {maxAge: age});
        } else {//不记住我则要清空浏览器cookie,做法是设置cookie生命周期为负数,使cookie失效
            res.cookie('username', {maxAge: -1});
            res.cookie('password', {maxAge: -1});
            res.cookie('remember_me', {maxAge: -1});
        }
        //通过session来记住用户的数据,将查询到的用户id保存到session中
        req.session.user_id = getData.id;
        req.session.username = getData.username;
        req.session.is_vip = getData.is_vip;
        console.log('查到的所有数据:' + req.session.user_id+'/'+req.session.username)
        //登录成功
        return res.send({
            userIsVip: req.session.is_vip,
            msg: '登录成功!'
        });
    })
}
//读取session
module.exports.getSession = function (req,res,next) {
    //先判断cookie有没有用户名,有的话继续查数据库,看用户信息中的id和session中的id是否一致,否则跳回登录页
    console.log(req.session);
    //拿到用户id,传入到User对象中,先创建User实例
    let user_id = req.session.user_id;
    let formUser = new User({user_id: user_id});
    formUser.findUserById(function (err, data) {
        if (err) throw err;
        if(data.length!=0){//说明根据id查到用户信息了
            console.log(req.session.is_vip)
            return res.send({
                getSessUserName:req.session.username,
                getSessIsVip:req.session.is_vip
            });//将用户信息返回
        }else{
            console.log('没有查到用户信息')
            return res.send({
                getSessUserName:'',
                getSessIsVip:''
            });
        }
    })

}

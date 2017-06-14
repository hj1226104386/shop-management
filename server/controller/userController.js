/**
 * Created by huangjin on 2017/6/4.
 */
"use strict";

//这里做的是具体处理用户的请求;
const utils = require('utility');//md5加密
const User = require('../models/user.js');
const getPic = require('../common/getPic.js');//处理验证码函数

//注册
module.exports.doRegister = function (req, res, next) {
    // if(err) throw err;
    //拿到请求体的参数,传入到数据库操作的函数中
    let username = req.body.username;
    let password = req.body.password;
    let email = req.body.email;
    let vcode = req.body.vcode;
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
            //继续判断验证码是否正确
            var sessionVcode = req.session.vcode;
            if(vcode!=sessionVcode){//验证码不正确
                return res.send({
                    msg: '验证码不正确,点击切换验证码!'
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
                res.cookie('username', username, {maxAge: age});
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
            username: username, password: password, remember_me: remember_me
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
    let vcode = req.body.vcode;
    console.log('登录时看rem是否传到后台' + remember_me)
    let isVip = req.body.vip;
    let formUser = new User({username: username, password: password, remember_me: remember_me});
    //先查找用户名是否存在
    formUser.findUserName(function (err, data) {
        if (err) throw err;
        var getData = data[0];
        console.log('我是getData:' + getData);
        console.log(data);//打印查询结果
        if (data.length == 0) {//说明未查询到数据;
            return res.send({
                msg: '账号不存在!'
            })
            res.end();
        } else {//查询到数据
            //判断用户数据是否被禁用
            if (getData['status'] == 1) {//禁用状态
                return res.send({
                    msg: '该账号暂被禁用!'
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
        } else {
            //继续判断验证码是否正确
            var sessionVcode = req.session.vcode;
            if(vcode!=sessionVcode){//验证码不正确
                return res.send({
                    msg: '验证码不正确,点击切换验证码!'
                })
                res.end();
            }
            //判断账号是否是管理员账号
            if (isVip != 0) {//说明是通过管理员页面登录
                if (getData.is_vip != 1) {
                    return res.send({
                        msg: '您不是管理员哦!'
                    })
                    res.end();
                }
            } else {//通过普通会员页面登录
                if (getData.is_vip != 0) {
                    return res.send({
                        msg: '请去管理员窗口登录!'
                    })
                    res.end();
                }

            }
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
        console.log('查到的所有数据:' + req.session.user_id + '/' + req.session.username)
        //登录成功
        return res.send({
            userIsVip: req.session.is_vip,
            msg: '登录成功!'
        });
    })
}
//读取session
module.exports.getSession = function (req, res, next) {
    //先判断cookie有没有用户名,有的话继续查数据库,看用户信息中的id和session中的id是否一致,否则跳回登录页
    console.log(req.session);
    //拿到用户id,传入到User对象中,先创建User实例
    let user_id = req.session.user_id;
    let formUser = new User({user_id: user_id});
    formUser.findUserById(function (err, data) {
        if (err) throw err;
        if (data.length != 0) {//说明根据id查到用户信息了
            console.log(req.session.is_vip)
            return res.send({
                getSessUserName: req.session.username,
                getSessIsVip: req.session.is_vip
            });//将用户信息返回
        } else {
            console.log('没有查到用户信息')
            return res.send({
                getSessUserName: '',
                getSessIsVip: ''
            });
        }
    })

}

//查询所有的商户信息
module.exports.findTenants = function (req, res, next) {
    let queryTenants = new User({});//创建User函数实例,执行其中的查询所有商户信息的查询操作
    queryTenants.findAlltenants(function (err, data) {
        if (err) throw err;
        if (data.length != 0) {
            return res.send({
                datas: data
            })
        } else {
            return res.send({
                msg: '数据查询成功!',
                data: data
            })
        }
    })
}

//删除一条商户账号信息
module.exports.deleteOne = function (req, res, next) {
    let id = req.body.id;
    let formUser = new User({id: id});//创建User函数实例
    formUser.deleteOne(function (err, data) {
        if (err) throw err;
        console.log(data);
        if (data.affectedRows != 0) {//成功
            return res.json({
                code: 0
            })
        } else {
            return res.send({//失败
                code: 1
            })
        }

    })
}
//恢复一个商户账号
module.exports.recover = function (req, res, next) {
    let id = req.body.id;
    let formUser = new User({id:id});//创建User函数实例
    formUser.findUser(function (err,data) {
        if(err) throw err;
        if(data.length!=0){//说明查到数据
            //更新数据
            formUser.recover(function (err,update) {
                if(err) throw err;
                if(data.affectedRows!=0){//更新成功
                    return res.send({code:'0'})
                }else{
                    return res.send({code:'1'})
                }

            })
        }else{
            return res.send({msg:'账号不存在!'})
        }
    })
}
//禁用一个商户账号
module.exports.forbidden = function (req, res, next) {
    let id = req.body.id;
    let formUser = new User({id:id});//创建User函数实例
    formUser.findUser(function (err,data) {
        if(err) throw err;
        if(data.length!=0){//说明查到数据
            //更新数据
            formUser.forbidden(function (err,update) {
                if(err) throw err;
                if(data.affectedRows!=0){//更新成功
                    return res.send({code:'0'})
                }else{
                    return res.send({code:'1'})
                }

            })
        }else{
            return res.send({msg:'账号不存在!'})
        }
    })
}
//插入一条新数据
module.exports.addNewTenant = function (req, res, next) {
    let shopname = req.body.shopname;
    let name = req.body.name;
    let age = req.body.age;
    let gender = req.body.gender;
    let phone = req.body.phone;
    let email = req.body.email;
    let address = req.body.address;
    let formUser = new User({shopname,name,age,gender,phone,email,address});//创建User函数实例
    formUser.addNewTenant(function (err,data) {
        if(err) throw err;
        if(data.affectedRows!=0){//数据插入成功
            return res.send({
                code:'0'
            })
        }else{
            return res.send({
                code:'1'
            })
        }

    })
}
//获取所有商户信息
module.exports.getAllMsg = function (req, res, next) {
    let id = req.body.id;
    let formUser = new User({id:id});//创建User函数实例
    formUser.getAllMsg(function (err,data) {
        if(err) throw err;
        console.log(data)
        if(data.length!=0){//说明查到数据
            return res.send({'datas':data});//将所有数据返回
        }else{
            return res.send({msg:'账号不存在!'})
        }
    })
}
//更新商户所有信息
module.exports.updateManyMsg = function (req, res, next) {
    let shopname = req.body.shopname;
    let name = req.body.name;
    let gender = req.body.gender;
    let age = req.body.age;
    let phone = req.body.phone;
    let email = req.body.email;
    let address = req.body.address;
    let id = req.body.id;
    let formUser = new User({shopname,name,gender,age,phone,email,address,id});//创建User函数实例
    formUser.updateManyMsg(function (err,data) {
        if(err) throw err;
        if(data.changedRows!=0){//批量更新成功
            return res.send({
                code:'0'
            })
        }else{
            return res.send({
                code:'1'
            })
        }

    })
}
module.exports.getVcode = function (req,res,next) {
    var getObj = getPic.getVcode();//拿到十六进制文件流和验证码内容
    var vcode = getObj.vcode+'';//将数字隐式转成字符串
    var picture = getObj.buf;//十六进制文件流
    req.session.vcode = vcode;//写入session,方便用户拿到;
    return res.send(picture);
}
//拿到一个商户的所有商品
module.exports.getOneTenantGoods = function (req,res,next) {
    var getId = req.body.id;
    console.log('getId:'+getId)
    let formUser = new User({id:getId});//创建User函数实例
    formUser.getOneTenantGoods(function (err,data) {
        if(err) throw err;
        console.log(data);
        return res.send({
            datas:data
        });
    })
}
//查询一个商户的所有用户订单
module.exports.getOneTenantOrders = function (req,res,next) {
    var getId = req.session.user_id;
    console.log(getId);
    let formUser = new User({id:getId});//创建User函数实例
    formUser.getOneTenantOrders(function (err,data) {
        if(err) throw err;
        console.log(data);
        return res.send({
            datas:data
        });
    })
}
//获取所有商户的部分信息
module.exports.getAllTenants = function (req,res,next) {
    let formUser = new User({});//创建User函数实例
    formUser.getAllTenants(function (err,data) {
        if(err) throw err;
        console.log(data);
        return res.send({
            datas:data
        });
    })
}
//根据id查找当前自己的信息
module.exports.findMyself = function (req,res,next) {
    var getId = req.session.user_id;
    console.log(getId);
    let formUser = new User({id:getId});//创建User函数实例
    formUser.findMyself(function (err,data) {
        if(err) throw err;
        console.log(data);
        return res.send({
            datas:data
        });
    })
}
//更改密码
module.exports.changePsd = function (req,res,next) {
    var getId = req.session.user_id;
    var newPsd = req.body.newPsd;
    var oldPsd = req.body.oldPsd;
    var md5New = utils.md5(newPsd);//将密码转换城base64形式
    console.log("加密后的新密码:"+md5New);
    let formUser = new User({md5New:md5New,id:getId});//创建User函数实例
    formUser.findMyself(function (err,data) {
        var myMsg = data[0];
        if(err) throw err;
        console.log('查出来的个人信息'+myMsg);
        var getPsd = myMsg.password;
        //判断新旧密码是否一致,先加密输入的密码
        var md5Old = utils.md5(oldPsd);//将密码转换城base64形式
        console.log("数据库密码:"+getPsd);
        console.log("输入的旧密码:"+md5Old);
        if(md5Old!=getPsd){
            return res.send({
                msg:'旧密码错误!'
            })
            res.end();
        }
        if(md5New==getPsd){
            return res.send({
                msg:'请不要再次使用旧密码!'
            })
            res.end();
        }
        //更新密码
        formUser.updatePsd(function (err,data) {
            var getReturn = data[0]
            if(err) throw err;
            console.log("修改密码返回结果:"+getReturn);
            return res.send({
                msg:'密码修改成功!'
            })
        })

    })
}
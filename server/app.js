/**
 * Created by huangjin on 2017/5/29.
 */
"use strict";
let express = require('express');
let app = express();
let router = express.Router();
let path = require('path');
let bodyParser = require('body-parser');//解析请求体
let userRouter = require('./routers/userRouters.js');
let User = require('./models/user.js');//引入User函数
let utils = require('utility');//md5加密
let cookieParser = require('cookie-parser');//cookie操作
var session = require('express-session');//引入session插件


//静态资源托管
app.use(express.static(path.join(__dirname, '../client/')));

//处理post请求体数据
app.use(bodyParser.urlencoded({extended: false}));

//cookie操作
app.use(cookieParser());


//加入session中间件
app.use(session({
    secret: 'manager',
    resave: false,
    saveUninitialized: true//是否保存未初始化的数据到session
}))

//将路由放到中间件队列;
app.use(userRouter);

//开启监听服务
app.listen(9000, () => {
    console.log('本地服务器启动啦,占用端口9000!')
})
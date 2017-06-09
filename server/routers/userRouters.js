/**
 * Created by huangjin on 2017/6/4.
 */

"use strict";
let express = require('express');
let Router = express.Router();
let userController = require('../controller/userController.js');

//路由分配

Router.post('/doRegister',userController.doRegister);//默认会传req,res,err参数进去
Router.post('/beforeLogin',userController.beforeLogin);//默认会传req,res,err参数进去
Router.post('/doLogin',userController.doLogin);//默认会传req,res,err参数进去
Router.post('/getSession',userController.getSession);//默认会传req,res,err参数进去
Router.post('/findTenants',userController.findTenants);//默认会传req,res,err参数进去












//导出路由
module.exports = Router;
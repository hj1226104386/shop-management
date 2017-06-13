/**
 * Created by huangjin on 2017/6/4.
 */

"use strict";
let express = require('express');
let Router = express.Router();
let userController = require('../controller/userController.js');

//路由分配

Router.post('/doRegister',userController.doRegister);//默认会传req,res,err参数进去
Router.post('/beforeLogin',userController.beforeLogin);
Router.post('/doLogin',userController.doLogin);
Router.post('/getSession',userController.getSession);
Router.post('/findTenants',userController.findTenants);
Router.post('/deleteOne',userController.deleteOne);
Router.post('/recover',userController.recover);
Router.post('/forbidden',userController.forbidden);
Router.post('/getAllMsg',userController.getAllMsg);
Router.post('/addNewTenant',userController.addNewTenant);
Router.post('/updateManyMsg',userController.updateManyMsg);
Router.get('/getVcode',userController.getVcode);//获取验证码
Router.post('/getOneTenantGoods',userController.getOneTenantGoods);//获取一个商户的所有商品












//导出路由
module.exports = Router;
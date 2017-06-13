/**
 * Created by huangjin on 2017/5/29.
 */
;
(function (Vue) {
    //在初始化组件之前要先注册
    Vue.component('register', {
        template: `<div class="h-login-bg  animated fadeInRight">
<div class="h-login h-register-wrapper">
    <div class="ibox-content h-register">
    <h3>用户注册</h3>
    <p>创建一个系统新账户</p>
    <form class="form-horizontal m-t" id="signupForm" novalidate="novalidate">
                            <div class="form-group">
                                <label class="col-sm-3 control-label">用户名：</label>
                                <div class="col-sm-8">
                                    <input id="username" v-model="username" name="username" class="form-control" type="text" aria-required="true" aria-invalid="true">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-3 control-label">密码：</label>
                                <div class="col-sm-8">
                                    <input id="password" v-model="password" name="password" class="form-control" type="password">
                                    <span class="help-block m-b-none"><i class="fa fa-info-circle"></i> 设置一个复杂的密码哦</span>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-3 control-label">确认密码：</label>
                                <div class="col-sm-8">
                                    <input id="confirm_password" name="confirm_password" class="form-control" type="password">
                                    <span class="help-block m-b-none"><i class="fa fa-info-circle"></i> 请再次输入您的密码</span>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-3 control-label">E-mail：</label>
                                <div class="col-sm-8">
                                    <input id="email" v-model="email" name="email" class="form-control" type="email">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-sm-4 col-sm-offset-3">
                                    <input v-model="vcode" type="text" class="form-control" name="vcode" placeholder="验证码">
                                </div>
                                <div class="col-sm-3" style="padding-left:0;">
                                    <img @click="vcodeRegister" class="vcode-img" width="80" v-bind:src="codeUrl" style="cursor:pointer;">
                                </div>
                            </div>
                            <div class="form-group">
                            <div class="col-sm-8 col-sm-offset-3">
                            <span style="color:red;" v-text="tipMsg"></span>
</div>
</div>
                            <div class="form-group">
                                <div class="col-sm-8 col-sm-offset-3">
                                    <button class="btn btn-info" type="button" style='margin-right:15px;' @click="register()">注册</button>
                                    <span class=" text-center" style="margin-left: 20px;"><small>已经有账户了？</small><a href="#/login">点此登录</a>
                </span>
                                </div>
                            </div>
                        </form>
</div>
</div>
</div>
`,
        data: function () {
            return {
                username:'',
                password:'',
                email:'',
                tipMsg:'',
                vcode:'',
                codeUrl:'/getVcode'

            }
        },
        mounted: function () {

        },
        methods:{
            register:function(){
                that = this;
                const formData = {username:this.username,password:this.password,email:this.email,vcode:this.vcode};
                that.$http.post('/doRegister',formData,{emulateJSON:true}).then(
                    (res)=>{
                        // console.log(res);
                        if(res.body.msg=='恭喜您,注册成功!'){
                            that.tipMsg = res.body.msg+'3s后自动跳转到首页';
                            setTimeout(function () {
                                that.$router.push({path: '/'})
                            },2000)
                        }else{
                            that.tipMsg = res.body.msg;
                            $('.vcode-img').click();
                        }
                    },
                    (res)=>{
                        alert('失败');
                    })
            },
            vcodeRegister:function () {
               this.codeUrl = '/getVcode?'+(+new Date());
            }
        }
    })

})(Vue)
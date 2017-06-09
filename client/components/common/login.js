/**
 * Created by huangjin on 2017/5/29.
 */
;
(function (Vue) {
    //在初始化组件之前要先注册
    Vue.component('login-page', {
        template: `<div class="h-login-bg animated fadeInRight">
<div class="h-login">
    <div class="tabs-container">
        <ul class="nav nav-tabs">
            <li class="active" @click="isCommon"><a data-toggle="tab" href="#tab-1" aria-expanded="true"> 普通用户登录</a>
            </li>
            <li @click="isVip"><a data-toggle="tab" href="#tab-2" aria-expanded="false">管理员登录</a>
            </li>
        </ul>
        <div class="tab-content">
            <div id="tab-1" class="tab-pane active">
                <div class="panel-body">
                    <div class="ibox-content">
                        <form class="form-horizontal m-t" id="commentForm" novalidate="novalidate">
                            <div class="form-group">
                                <label class="col-sm-3 control-label">用户名：</label>
                                <div class="col-sm-8">
                                    <input id="cname" v-model="username" name="name" minlength="2" type="text" class="form-control" required="" aria-required="true" placeholder="请输入用户名">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-3 control-label">密码：</label>
                                <div class="col-sm-8">
                                    <input id="cemail" v-model="password" type="password" class="form-control" name="password" required="" aria-required="true">
                                </div>
                            </div>
                            <div class="form-group" style="margin-bottom:0;">
                                <div class="col-sm-8 col-sm-offset-3">
                                    <input type="checkbox" v-model="remember_me" class="checkbox" id="agree" name="rememberMe" style="display:inline-block;vertical-align:middle;">
                                    <span style="display:inline-block;vertical-align:middle;"> 记住我</span>
                                    <span style="color:red;" v-text="tipMsg"></span>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-sm-2 col-sm-offset-3">
                                    <button class="btn btn-info" type="button" @click="doLogin">登录</button>
                                </div>
                                <div class="col-sm-5 col-sm-offset-1" style="line-height:30px;">
                                    <span><small>没有账号？</small></span><a href='#/register'>点我注册</a>
                                </div>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
            <div id="tab-2" class="tab-pane">
                <div class="panel-body">
                    <div class="ibox-content">
                        <form class="form-horizontal m-t" id="commentForm" novalidate="novalidate">
                            <div class="form-group">
                                <label class="col-sm-3 control-label">用户名：</label>
                                <div class="col-sm-8">
                                    <input id="cname" v-model="username" name="name" minlength="2" type="text" class="form-control" required="" aria-required="true"  placeholder="请输入用户名">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-3 control-label">密码：</label>
                                <div class="col-sm-8">
                                    <input id="cemail" v-model="password" type="password" class="form-control" name="password" required="" aria-required="true">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-sm-8 col-sm-offset-3">
                                    <span style="color:red;" v-text="tipMsg2"></span>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-sm-2 col-sm-offset-3">
                                    <button class="btn btn-info" type="button" @click="doLogin">登录</button>
                                </div>
                                <div class="col-sm-6 col-sm-offset-1" style="line-height:30px;">
                                    <span>没有账号?请联系Boss</span>
                                </div>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>


    </div>
</div>
</div>
`,
        data: function () {
            return {
                username: '',
                password: '',
                remember_me: '',
                tipMsg: '',
                tipMsg2: '',
                judgeIsVip: false
            }
        },
        mounted: function () {
            that = this;
            that.$http.post('/beforeLogin').then((res) => {//传参不能直接写一个对象
                console.log(res.body.remember_me)
                if (res.body.remember_me) {
                    //往表单中回填数据
                    that.username = res.body.username;
                    that.password = res.body.password;
                    that.remember_me = true;
                } else {
                    that.username = res.body.username;
                    that.username = '';
                }
            })

        },
        methods: {
            doLogin: function () {
                that = this;
                //先判断是否有输入用户名密码
                if (that.username=='' || that.password=='') {
                    that.tipMsg = '请输入登录信息';
                    return;
                }
                var formData = {}
                if (that.judgeIsVip == false) {//普通会员登录
                    formData = {
                        username: this.username,
                        password: this.password,
                        vip: 0,
                        remember_me: this.remember_me
                    };
                    that.$http.post('/doLogin', formData, {emulateJSON: true}).then((res) => {//传参不能直接写一个对象
                        if (res.body.userIsVip == 0) {//说明是普通会员
                            that.tipMsg = res.body.msg + '2s后跳至首页';
                            setTimeout(function () {
                                that.$router.push({path: '/'})
                            }, 2000)
                        } else {
                            that.tipMsg = res.body.msg;
                            return;
                        }
                    })
                } else {//管理员登录
                    formData = {
                        username: this.username,
                        password: this.password,
                        vip: 1
                    };
                    that.$http.post('/doLogin', formData, {emulateJSON: true}).then((res) => {//传参不能直接写一个对象
                        console.log(res);
                        if (res.body.userIsVip != 1) {
                            that.tipMsg2 = res.body.msg;
                            return;
                        } else {
                            that.tipMsg2 = res.body.msg + '2s后跳至首页';
                            setTimeout(function () {
                                that.$router.push({path: '/'})
                            }, 2000)
                        }

                    })
                }
            },
            isCommon: function () {
                this.judgeIsVip = false;
            },
            isVip: function () {
                this.judgeIsVip = true;
                //清空账号密码
                this.username = '';
                this.password = '';
                this.remember_me = false;
            }
        }
    })

})(Vue)
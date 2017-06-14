/**
 * Created by huangjin on 2017/5/29.
 */
;
(function (Vue) {
    //在初始化组件之前要先注册
    Vue.component('change-psd',{
        template:`
        <div class="animated fadeInRight h-tenant-goods">
        <h3>修改密码</h3>
<div class="ibox" style="width:100%;height:100%;margin-top: 15px;padding:15px;">
 <div class="row">
    <div class="col-md-12 animated fadeInRight">
        <form id="signupForm" class="form-horizontal m-t">
    <div class="form-group">
        <label class="col-sm-2 control-label">账号：</label>
        <div class="col-sm-9">
            <input name="shopname" type="text" class="form-control" readonly v-model="username">
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-2 control-label">*旧密码：</label>
        <div class="col-sm-9">
            <input name="name" type="password" class="form-control" v-model="oldPsd">
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-2 control-label">*新密码：</label>
        <div class="col-sm-9">
            <input name="name" type="password" class="form-control" v-model="newPsd">
        </div>
    </div>
    <div class="form-group">
        <div class="col-md-12 control-label text-center" style="color:red;text-align: center;" v-text="tip"></div>
    </div>
    <div class="form-group">
        <div class="col-sm-7 col-sm-offset-5">
            <button class='btn btn-info' @click.prevent='submitChange()'>确认修改</button>
        </div>
    </div>
</form>
     </div>
</div>
</div>
</div>
`,
        data:function () {
            return {
                oldPsd:'',
                newPsd:'',
                username:'',
                tip:''
            }
        },
        mounted:function () {
            //回写用户名
            this.$http.post('/findMyself',{}, {emulateJSON: true}).then((res)=>{
                var getData = res.body.datas[0];
                this.username = getData.username;
            })
        },
        methods:{
            submitChange:function () {
                var that = this;
                if(that.newPsd==""||that.oldPsd==""){
                    this.tip = '请输入完整信息';
                    return;
                }
                this.$http.post('/changePsd',{newPsd:that.newPsd,oldPsd:that.oldPsd}, {emulateJSON: true}).then((res)=>{
                    if(res.body.msg){
                        this.tip = res.body.msg;
                    }else{

                    }

                })
            }
        }

    })

})(Vue)
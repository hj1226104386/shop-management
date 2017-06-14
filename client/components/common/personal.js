/**
 * Created by huangjin on 2017/5/29.
 */
;
(function (Vue) {
    //在初始化组件之前要先注册
    Vue.component('personal-page',{
        template:`
        <div class="animated fadeInRight h-tenant-goods">
        <h3>个人账号信息</h3>
<div class="ibox" style="width:100%;height:100%;margin-top: 15px;padding:15px;">
 <div class="row">
    <div class="col-md-12 animated fadeInRight">
        <form id="signupForm" class="form-horizontal m-t">
    <div class="form-group">
        <label class="col-sm-2 control-label">账号：</label>
        <div class="col-sm-9">
            <input name="shopname" type="text" class="form-control" v-model="username">
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-2 control-label">姓名：</label>
        <div class="col-sm-9">
            <input name="name" type="text" class="form-control" v-model="name">
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-2 control-label">性别：</label>
        <div class="col-sm-9">
            <input name="gender" type="text" class="form-control" v-model="gender">
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-2 control-label">年龄：</label>
        <div class="col-sm-9">
            <input name="age" type="text" class="form-control" v-model="age">
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-2 control-label">电话：</label>
        <div class="col-sm-9">
            <input name="phone" type="text" class="form-control" v-model="phone">
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-2 control-label">E-mail：</label>
        <div class="col-sm-9">
            <input name="email" type="text" class="form-control" v-model="email">
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-2 control-label">店铺名称：</label>
        <div class="col-sm-9">
            <input name="shopname" type="text" class="form-control" v-model="shopname">
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-2 control-label">店铺地址：</label>
        <div class="col-sm-9">
            <input name="address" type="text" class="form-control" v-model="address">
        </div>
    </div>
    <div class="form-group">
        <label class="col-ms-8 col-md-offset-5 control-label" style="color: red;"></label>
    </div>
</form>
     </div>
</div>
</div>
</div>
`,
        data:function () {
            return {
                allData:'',
                address:"",
                age:"",
                email:"",
                gender:"",
                name:"",
                phone:"",
                shopname:"",
                username:""
            }
        },
        mounted:function () {
            this.$http.post('/findMyself',{}, {emulateJSON: true}).then((res)=>{
                console.log(res.body);
                this.allData = res.body.datas;
                this.address = res.body.datas[0].address
                this.age = res.body.datas[0].age
                this.email = res.body.datas[0].email
                this.gender = res.body.datas[0].gender
                this.name = res.body.datas[0].name
                this.phone = res.body.datas[0].phone
                this.shopname = res.body.datas[0].shopname
                this.username = res.body.datas[0].username
            })
        },

    })

})(Vue)
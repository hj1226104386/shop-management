/**
 * Created by huangjin on 2017/5/29.
 */
;
(function (Vue) {
    //在初始化组件之前要先注册
    Vue.component('home-page', {
        template: `
        <div class="" id="wrapper">
        <!--左侧导航开始-->
        <side-bar :isVip="isVip"></side-bar>
        <!--右侧部分开始-->
        <right-side :userName="userName"></right-side>
</div>
`,
        data: function () {
            return {
                userName: '未识别到登录用户',
                isVip: '不知道是否是管理员'
            }
        },
        mounted: function () {
            var that = this;
            that.$http.post('/getSession').then((res) => {//传参不能直接写一个对象
                console.log(res.body);//返回的信息是从session中拿的
                if (res.body.getSessUserName) {//用户验证通过

                    //判断是否是管理员账号
                    if (res.body.getSessIsVip == 0) {//普通用户
                        that.isVip = false;
                        that.userName = res.body.getSessUserName+'(商户)';
                    } else {//管理员
                        that.isVip = true;
                        that.userName = res.body.getSessUserName+'(管理员)';
                    }
                    // alert(that.isVip)
                } else {
                    that.$router.push({path: '/login'});
                }

            }, (res) => {
                alert(that.userName);
            })
        }
    })

})(Vue)
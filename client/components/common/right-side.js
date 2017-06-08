/**
 * Created by huangjin on 2017/5/29.
 */
;
(function (Vue) {
    //在初始化组件之前要先注册
    Vue.component('right-side', {
        template: `
        
        <!--右侧部分开始-->
        <div id="page-wrapper" class="gray-bg dashbard-1">
            <div class="row border-bottom">
                <nav class="navbar navbar-static-top" role="navigation" style="margin-bottom: 0">
                    <div class="navbar-header">
                    <a class="navbar-minimalize minimalize-styl-2 btn btn-info " @click.stop><i class="fa fa-bars"></i> </a>
                        <form role="search" class="navbar-form-custom" method="post" action="">
                            <div class="form-group">
                                <!--{{userName}}-->
                                <input type="text" placeholder="请输入您需要查找的内容 …" class="form-control" name="top-search" id="top-search">
                            </div>
                        </form>
                    </div>
                    <ul class="nav navbar-top-links navbar-right">
                        <li class="h-home-nav-link">
                            <div class="h-avator-wrapper"><img src="../../assets/img/avator.jpg" ></div>
                            <span v-text='userName'></span>
                        </li>
                        <li class="h-home-nav-link-logout">
                            <router-link tag="a" to="/login" ><span class='fa fa-sign-out'></span>退出</router-link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class=" J_mainContent" id="content-main" >
                <router-view></router-view>
            </div>
            
        </div>
        
`,
        props: ['userName'],
        data:function () {
            return {
                username:''
            }
        },
        mounted: function () {
            this.username = this['userName'];
            // alert(this['userName'])
        }
    })

})(Vue)
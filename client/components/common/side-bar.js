/**
 * Created by huangjin on 2017/5/29.
 */
;
(function (Vue) {
    //在初始化组件之前要先注册
    Vue.component('side-bar',{
        template:`
        <!--左侧导航开始-->
        <nav class="navbar-default navbar-static-side" role="navigation">
            <div class="nav-close"><i class="fa fa-times-circle"></i>
            </div>
            <div class="sidebar-collapse">
                <ul class="nav" id="side-menu">
                    <li class="nav-header">
                        <div class="dropdown profile-element">
                            <a data-toggle="dropdown" class="dropdown-toggle" href="#">
                                <span class="clear">
                                    <span class="block m-t-xs" style="font-size:20px;">
                                        <i class="fa fa-area-chart"></i>
                                        <strong class="font-bold">超市管理系统</strong>
                                    </span>
                                </span>
                            </a>
                        </div>
                        <div class="logo-element">超市</div>
                    </li>
                    <li class="hidden-folded padder m-t m-b-sm text-muted text-xs h-margin25">
                        <span class="ng-scope">分类</span>
                    </li>
                    <li>
                        <a class="J_menuItem h-nav-link-home" href="#/news">
                            <i class="fa fa-home"></i>
                            <span class="nav-label">主页</span>
                        </a>
                    </li>
                    <li v-if="isVip==true">
                        <a href="#">
                            <i class="fa fa fa-bar-chart-o"></i>
                            <span class="nav-label">商户</span>
                            <span class="fa arrow"></span>
                        </a>
                        <ul class="nav nav-second-level">
                            <li>
                                <a class="J_menuItem" href="#/tenantManage">账号管理</a>
                            </li>
                            <li>
                                <a class="J_menuItem" href="#/tenantGoods">店内商品</a>
                            </li>
                            <li>
                                <a class="J_menuItem" href="#/tenantDetail">详细信息</a>
                            </li>
                        </ul>
                    </li>
                    <li v-if="isVip==true">
                        <a href="#"><i class="fa fa-edit"></i> <span class="nav-label">订单</span><span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level">
                            <li><a class="J_menuItem" href="#/tenantOrder">商户订单</a>
                            </li>
                        </ul>
                    </li>
                    <li v-if="isVip==false">
                        <a href="#"><i class="fa fa-table"></i> <span class="nav-label">商品</span><span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level">
                            <li><a class="J_menuItem" href="#/allGoods">所有商品</a>
                            </li>
                            <li><a class="J_menuItem" href="#/userOrder">新进商品</a>
                            </li>
                        </ul>
                    </li>
                    <li v-if="isVip==false">
                        <a href="#"><i class="fa fa-desktop"></i> <span class="nav-label">订单</span><span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level">
                            <li><a class="J_menuItem" href="#/userOrder">用户订单</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#"><i class="fa fa-picture-o"></i> <span class="nav-label">功能 </span><span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level">
                            <li><a class="J_menuItem" href="">个人中心</a>
                            </li>
                            <li><a class="J_menuItem" href="">修改密码</a>
                            </li>
                            <li><a class="J_menuItem" href="">修改地址</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
        <!--左侧导航结束-->
`,
        props: ['isVip'],
        mounted:function () {
            // this.vip = this['isVip'];//判断是否是管理员账户
            // alert(this['isVip'])
        },

    })

})(Vue)
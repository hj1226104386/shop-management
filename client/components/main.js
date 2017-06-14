/**
 * Created by huangjin on 2017/5/29.
 */


// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
    { path: '/register', component: Vue.component('register') },
    { path: '/login', component: Vue.component('login-page') },
    { path: '/', component: Vue.component('home-page'),
        children:[
            {
                path:'/news',
                component:Vue.component('news')
            },
            {
                path:'/',
                component:Vue.component('news')
            },
            {
                path:'/tenantManage',
                component:Vue.component('tenant-account')
            },
            {
                path:'/tenantDetail',
                component:Vue.component('tenant-detail')
            },
            {
                path:'/tenantGoods',
                component:Vue.component('tenant-goods')
            },
            {
                path:'/tenantOrder',
                component:Vue.component('tenant-order')
            },
            {
                path:'/allGoods',
                component:Vue.component('all-goods')
            },
            {
                path:'/userOrder',
                component:Vue.component('user-order')
            },
            {
                path:'/goodDetail',
                component:Vue.component('good-detail')
            },
            {
                path:'/personal',
                component:Vue.component('personal-page')
            },
            {
                path:'/changePsd',
                component:Vue.component('change-psd')
            },
        ]
    },

]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
    routes:routes // （缩写）相当于 routes: routes
})

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
    router
}).$mount('#app')

// 现在，应用已经启动了！

//测试vue-resource插件处理vue请求 ,如果直接请求node搭建的服务器,就会发生跨域,这里用node做中间层替我们去发送请求;
/*Vue.http.get('/api/students/587e4149b1e6e1422883ffbe').then((res)=>{
 console.log(res);
 });*/

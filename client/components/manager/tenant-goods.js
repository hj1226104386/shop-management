/**
 * Created by huangjin on 2017/5/29.
 */
;
(function (Vue, $) {
    //在初始化组件之前要先注册
    Vue.component('tenant-goods', {
            template: `
        <div class="animated fadeInRight h-tenant-goods">
        <h3>店内商品</h3>
        <div class="container" style="margin-top: 20px;">
        <div class="row">
        <div class="col-md-3" style="padding:0!important;">
        <select class="form-control m-b" name="account" style="margin-bottom: 0;" v-model="selectValue" @change="selectChange(selectValue)">
                <option disabled selected>选择商户</option>
                <option v-for="tenant in allTenants" :value='tenant.id'>{{tenant.shopname}}</option>
                                        
        </select>
</div>
        <div class="input-group col-md-4 col-md-offset-1">
           <input type="text" placeholder="试着查找商户..." class="input form-control"><span class="input-group-btn">
               <button type="button" class="btn btn-success"> <i class="fa fa-search"></i> 搜索</button>
                 </span>
        </div>
</div>
</div>
<div class="ibox" style="width:100%;height:100%;margin-top: 15px;padding:15px;">
 <div class="row">
    <div class="col-md-12 animated fadeInRight">
    
                <div class="file-box" v-for="item in oneTenantGoods">
                    <div class="file">
                        <a href="#/goodDetail"> <span class="corner"></span>
                            <div class="image">
                                <img alt="image" class="img-responsive" :src="item.picName">
                            </div>
                            <div id="h-manager-goods-list" class="file-name" style="overflow:hidden;">
                            <p>{{item.desribtion}}</p>
                              <span class="pull-left">￥:<strong style="color:red">{{item.newPrice}}</strong></span>
                              <span class="pull-right">总销量:<strong style="color:red">{{item.saleNumber}}</strong></span>
                            </div>
                        </a>
                    </div>
                </div>
                
            </div>
</div>
</div>
</div>
`,
            data: function () {
                return {
                    allTenants: '',
                    selectValue: '2',
                    oneTenantGoods:''
                }
            },
            methods: {
                selectChange: function (id) {
                    var that = this;
                    //根据选择的商户的id查询到其所有的商品
                    that.$http.post('/getOneTenantGoods',{id:id},{emulateJSON: true}).then((res)=>{
                        that.oneTenantGoods = res.body.datas;
                        console.log(res.body.datas);
                    })
                }
            },
            mounted: function () {
                //初始化每个视图动态效果
                $('.file-box').each(function () {
                    animationHover(this, 'pulse');
                });

                var that = this;
                var params = {id: that.id};
                //先查询出所有商户的信息
                that.$http.post('/findTenants', {}, {emulateJSON: true}).then((res) => {
                    // console.log(res.body.datas);
                    if (res.body.datas) {//说明查到用户的数据了
                        that.allTenants = res.body.datas;
                    }
                })
                //如果默认有的话就发请求
                if(that.selectValue){
                    var getId = that.selectValue;
                    //根据选择的商户的id查询到其所有的商品
                    that.$http.post('/getOneTenantGoods',{id:getId},{emulateJSON: true}).then((res)=>{
                        that.oneTenantGoods = res.body.datas;
                    })

                }



            }
        }
    )


})(Vue, $)
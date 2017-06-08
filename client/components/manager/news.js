/**
 * Created by huangjin on 2017/5/29.
 */
;
(function (Vue) {
    //在初始化组件之前要先注册
    Vue.component('news',{
        template:`
        <div>
        <h3 class="h-news">最新动态</h3>
        <div class="row">
        <div class="col-md-12" style="padding:0;">
            <div class="wrapper wrapper-content">
                <div class="row animated fadeInRight">
                    <div class="col-sm-12">
                        <div class="ibox float-e-margins">
                            <div class="" id="ibox-content">
                                <div id="vertical-timeline" class="vertical-container light-timeline">
                                    <div class="vertical-timeline-block">
                                        <div class="vertical-timeline-icon navy-bg">
                                            <i class="fa fa-location-arrow"></i>
                                        </div>
                                        <div class="vertical-timeline-content">
                                            <h2>上架</h2>
                                            <p><strong>天猫超市</strong>上架了:<strong style="color:red;">士力架</strong></p>
                                            <a href="#" class="btn btn-sm btn-success" @click="getOne"> 查看详情</a>
                                            <span class="vertical-date">
                                        今天 <br>
                                        <small>5月31日</small>
                                    </span>
                                        </div>
                                    </div>

                                    <div class="vertical-timeline-block">
                                        <div class="vertical-timeline-icon blue-bg">
                                            <i class="fa fa-align-right"></i>
                                        </div>

                                        <div class="vertical-timeline-content">
                                            <h2>修改</h2>
                                            <p><strong>乐天超市</strong>调整了:<strong style="color:red;">飞科剃须刀</strong></p>
                                            <a href="#" class="btn btn-sm btn-success" @click="getTwo">查看详情</a>
                                            <span class="vertical-date">
                                        今天 <br>
                                        <small>5月31日</small>
                                    </span>
                                        </div>
                                    </div>

                                    <div class="vertical-timeline-block">
                                        <div class="vertical-timeline-icon lazur-bg">
                                            <i class="fa fa-undo"></i>
                                        </div>

                                        <div class="vertical-timeline-content">
                                            <h2>下架</h2>
                                            <p><strong>便利蜂</strong>下架了:<strong style="color:red;">泰国进口榴莲</strong></p>
                                            <a href="#" class="btn btn-sm btn-success" @click="getThree">查看详情</a>
                                            <span class="vertical-date"> 今天 <br><small>5月31日</small></span>
                                        </div>
                                    </div>

                                    <div class="vertical-timeline-block">
                                        <div class="vertical-timeline-icon yellow-bg">
                                            <i class="fa fa-align-right"></i>
                                        </div>

                                        <div class="vertical-timeline-content">
                                            <h2>修改</h2>
                                            <p><strong>云南过桥米线育新店</strong>调整了:<strong style="color:red;">大瓶装雪碧</strong></p>
                                            <a href="#" class="btn btn-sm btn-success" @click="getFour">查看详情</a>
                                            <span class="vertical-date">昨天 <br><small>5月30日</small></span>
                                        </div>
                                    </div>

                                    <div class="vertical-timeline-block">
                                        <div class="vertical-timeline-icon lazur-bg">
                                            <i class="fa fa-location-arrow"></i>
                                        </div>

                                        <div class="vertical-timeline-content">
                                            <h2>上架</h2>
                                            <p><strong>天猫超市</strong>上架了:<strong style="color:red;">米老头雪米饼</strong></p>
                                            <a href="#" class="btn btn-sm btn-success" @click="getFive">查看详情</a>
                                            <span class="vertical-date">前天 <br><small>5月29日</small></span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    
                            
     <div class="modal fade" id="myModal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content animated flipInY">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title">动态详情</h4>
      </div>
      <div class="modal-body">
        <div class='row' style="padding:10px 0;">
            <div class="col-md-6">
                <strong>商家名称:</strong>
                <span>{{this.oneMsg.tenantName}}</span>
            </div>
            <div class="col-md-6">
                <strong>商家地址:</strong>
                <span>{{this.oneMsg.tenantAdress}}</span>
            </div>
        </div>
        <div class='row' style="padding:10px 0;">
            <div class="col-md-6">
                <strong>操作类型:</strong>
                <span>{{this.oneMsg.operationType}}</span>
            </div>
            <div class="col-md-6">
                <strong>商品信息:</strong>
                <span>{{this.oneMsg.goodsMsg}}</span>
            </div>
        </div>
        <div class='row' style="padding:10px 0;">
            <div class="col-md-6">
                <strong>操作时间:</strong>
                <span>{{this.oneMsg.operationTime}}</span>
            </div>
            <div class="col-md-6">
                <strong>新品特价:</strong>
                <del>¥{{this.oneMsg.oldPrice}}</del>
                <span>¥{{this.oneMsg.nowPrice}}</span>
            </div>
        </div>
        <div class='row' style="padding:10px 0;">
            <div class="col-md-6">
                <strong>商品数量:</strong>
                <span>{{this.oneMsg.number}}(件)</span>
            </div>
            <div class="col-md-6">
                <strong>已售:</strong>
                <span>{{this.oneMsg.soldOut}}(件)</span>
            </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-dismiss="modal">确定</button>
      </div>
    </div>
  </div>
</div>
                            
</div>
`,
        data:function () {
            return {
                oneMsg:'',
                allMsg:[
                    {
                        tenantName:'天猫超市',
                        tenantAdress:'昌平区回龙观东大街18号店',
                        operationType:'上架',
                        goodsMsg:'士力架(横扫饥饿,做回自己)',
                        operationTime:'2017-5-31 17:32',
                        oldPrice:'36.00',
                        nowPrice:'26.00',
                        number:'2856',
                        soldOut:'188'
                    },
                    {
                        tenantName:'乐天超市',
                        tenantAdress:'海淀区丹棱街14号店',
                        operationType:'调整',
                        goodsMsg:'飞科剃须刀',
                        operationTime:'2017-5-29 8:52',
                        oldPrice:'78.00',
                        nowPrice:'65.00',
                        number:'366',
                        soldOut:'55'
                    },
                    {
                        tenantName:'便利蜂',
                        tenantAdress:'海淀区丹苏州街55号店',
                        operationType:'下架',
                        goodsMsg:'泰国进口榴莲(水果)',
                        operationTime:'2017-5-30 15:12',
                        oldPrice:'55.00',
                        nowPrice:'38.00',
                        number:'269',
                        soldOut:'199'
                    },
                    {
                        tenantName:'云南过桥米线育新店',
                        tenantAdress:'昌平区建材城西路金燕龙办公楼1楼',
                        operationType:'调整',
                        goodsMsg:'雪碧(大瓶装)',
                        operationTime:'2017-5-30 20:12',
                        oldPrice:'22.00',
                        nowPrice:'15.00',
                        number:'2564',
                        soldOut:'556'
                    },
                    {
                        tenantName:'有缘超市',
                        tenantAdress:'房山区西大桥东街99号店',
                        operationType:'上架',
                        goodsMsg:'米老头雪米饼(美味停不下来)',
                        operationTime:'2017-5-28 12:12',
                        oldPrice:'22.00',
                        nowPrice:'15.00',
                        number:'3221',
                        soldOut:'1452'
                    }
                    ]
            }
        },
        methods:{
            getOne:function () {
                this.oneMsg = this.allMsg[0];
                $('#myModal').modal('show');
            },
            getTwo:function () {
                this.oneMsg = this.allMsg[1];
                $('#myModal').modal('show');
            },
            getThree:function () {
                this.oneMsg = this.allMsg[2];
                $('#myModal').modal('show');
            },
            getFour:function () {
                this.oneMsg = this.allMsg[3];
                $('#myModal').modal('show');
            },
            getFive:function () {
                this.oneMsg = this.allMsg[4];
                $('#myModal').modal('show');
            },
        }
    })

})(Vue)
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
        <select class="form-control m-b" name="account" style="margin-bottom: 0;">
                                        <option disabled>选择商户</option>
                                        <option>天天超市</option>
                                        <option>便利蜂</option>
                                        <option>武商量贩</option>
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
                <div class="file-box">
                    <div class="file">
                        <a href=""> <span class="corner"></span>
 
                            <div class="image">
                                <img alt="image" class="img-responsive" src="../../assets/img/1.jpg">
                            </div>
                            <div class="file-name">
                            <strong style="color:red;">清甜爽口</strong>
                            <p>进口新西兰嘎啦果12个</p>
                              ￥:<strong style="color:#000">36.00</strong>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="file-box">
                    <div class="file">
                        <a href=""> <span class="corner"></span>
 
                            <div class="image">
                                <img alt="image" class="img-responsive" src="../../assets/img/2.jpg">
                            </div>
                            <div class="file-name">
                            <strong style="color:red;">香辣无比,等你来尝</strong>
                            <p>韩国进口三养拉面火鸡面</p>
                              ￥:<strong style="color:#000">38.00</strong>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="file-box">
                    <div class="file">
                        <a href=""> <span class="corner"></span>
 
                            <div class="image">
                                <img alt="image" class="img-responsive" src="../../assets/img/3.jpg">
                            </div>
                            <div class="file-name">
                               <strong style="color:red;">新年更旺</strong>
                            <p>新装旺仔牛奶</p>
                              ￥:<strong style="color:#000">42.00</strong>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="file-box">
                    <div class="file">
                        <a href=""> <span class="corner"></span>
 
                            <div class="image">
                                <img alt="image" class="img-responsive" src="../../assets/img/1.jpg">
                            </div>
                            <div class="file-name">
                            <strong style="color:red;">清甜爽口</strong>
                            <p>进口新西兰嘎啦果12个</p>
                              ￥:<strong style="color:#000">36.00</strong>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="file-box">
                    <div class="file">
                        <a href=""> <span class="corner"></span>
 
                            <div class="image">
                                <img alt="image" class="img-responsive" src="../../assets/img/2.jpg">
                            </div>
                            <div class="file-name">
                            <strong style="color:red;">香辣无比,等你来尝</strong>
                            <p>韩国进口三养拉面火鸡面</p>
                              ￥:<strong style="color:#000">38.00</strong>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="file-box">
                    <div class="file">
                        <a href=""> <span class="corner"></span>
 
                            <div class="image">
                                <img alt="image" class="img-responsive" src="../../assets/img/3.jpg">
                            </div>
                            <div class="file-name">
                               <strong style="color:red;">新年更旺</strong>
                            <p>新装旺仔牛奶</p>
                              ￥:<strong style="color:#000">42.00</strong>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="file-box">
                    <div class="file">
                        <a href=""> <span class="corner"></span>
 
                            <div class="image">
                                <img alt="image" class="img-responsive" src="../../assets/img/1.jpg">
                            </div>
                            <div class="file-name">
                            <strong style="color:red;">清甜爽口</strong>
                            <p>进口新西兰嘎啦果12个</p>
                              ￥:<strong style="color:#000">36.00</strong>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="file-box">
                    <div class="file">
                        <a href=""> <span class="corner"></span>
 
                            <div class="image">
                                <img alt="image" class="img-responsive" src="../../assets/img/2.jpg">
                            </div>
                            <div class="file-name">
                            <strong style="color:red;">香辣无比,等你来尝</strong>
                            <p>韩国进口三养拉面火鸡面</p>
                              ￥:<strong style="color:#000">38.00</strong>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="file-box">
                    <div class="file">
                        <a href=""> <span class="corner"></span>
 
                            <div class="image">
                                <img alt="image" class="img-responsive" src="../../assets/img/3.jpg">
                            </div>
                            <div class="file-name">
                               <strong style="color:red;">新年更旺</strong>
                            <p>新装旺仔牛奶</p>
                              ￥:<strong style="color:#000">42.00</strong>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="file-box">
                    <div class="file">
                        <a href=""> <span class="corner"></span>
 
                            <div class="image">
                                <img alt="image" class="img-responsive" src="../../assets/img/1.jpg">
                            </div>
                            <div class="file-name">
                            <strong style="color:red;">清甜爽口</strong>
                            <p>进口新西兰嘎啦果12个</p>
                              ￥:<strong style="color:#000">36.00</strong>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="file-box">
                    <div class="file">
                        <a href=""> <span class="corner"></span>
 
                            <div class="image">
                                <img alt="image" class="img-responsive" src="../../assets/img/2.jpg">
                            </div>
                            <div class="file-name">
                            <strong style="color:red;">香辣无比,等你来尝</strong>
                            <p>韩国进口三养拉面火鸡面</p>
                              ￥:<strong style="color:#000">38.00</strong>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="file-box">
                    <div class="file">
                        <a href=""> <span class="corner"></span>
 
                            <div class="image">
                                <img alt="image" class="img-responsive" src="../../assets/img/3.jpg">
                            </div>
                            <div class="file-name">
                               <strong style="color:red;">新年更旺</strong>
                            <p>新装旺仔牛奶</p>
                              ￥:<strong style="color:#000">42.00</strong>
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
                return {}
            },
            methods: {
                show: function () {
                    alert('ahaha')
                }
            },
            mounted: function () {
                //初始化每个视图动态效果
                $('.file-box').each(function () {
                    animationHover(this, 'pulse');
                });
            }
        }
    )


})(Vue, $)
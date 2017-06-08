/**
 * Created by huangjin on 2017/5/29.
 */
;
(function (Vue, $) {
    //在初始化组件之前要先注册
    Vue.component('all-goods', {
            template: `
        <div class="animated fadeInRight">
    <div class="h-nav-links container-fluid">
        <div class="row">
            <div class="col-md-3 col-sm-3 " style="height:400px;padding:0;">
                <ul id="h-goods-menu">
                    <li><span>所有分类</span>
                    </li>
                    <li><a href="javascript:;" onclick="document.getElementById('h-goods-link1').scrollIntoView();"><span class="fa fa-firefox" style="padding-right:5px;"></span>天天生鲜</a>
                    </li>
                    <li><a href="javascript:;" onclick="document.getElementById('h-goods-link2').scrollIntoView();"><span class="fa fa-twitter" style="padding-right:5px;"></span>美味零食</a>
                    </li>
                    <li><a href="javascript:;" onclick="document.getElementById('h-goods-link3').scrollIntoView();"><span class="fa fa-apple" style="padding-right:5px;"></span>家用电器</a>
                    </li>
                    <li><a href="javascript:;" onclick="document.getElementById('h-goods-link4').scrollIntoView();"><span class="fa fa-gg-circle" style="padding-right:5px;"></span>居家家纺</a>
                    </li>
                    <li><a href="javascript:;" onclick="document.getElementById('h-goods-link5').scrollIntoView();"><span class="fa fa-delicious" style="padding-right:5px;"></span>文具用品</a>
                    </li>
                    <li><a href="javascript:;" onclick="document.getElementById('h-goods-link6').scrollIntoView();"><span class="fa fa-facebook" style="padding-right:5px;"></span>生活必备</a>
                    </li>
                    <li><a href="javascript:;" onclick="document.getElementById('h-goods-link7').scrollIntoView();"><span class="fa fa-safari" style="padding-right:5px;"></span>户外运动</a>
                    </li>
                    <li><a href="javascript:;" onclick="document.getElementById('h-goods-link8').scrollIntoView();"><span class="fa fa-tripadvisor" style="padding-right:5px;"></span>鲜花工坊</a>
                    </li>
                    <li><a href="javascript:;" onclick="document.getElementById('h-goods-link9').scrollIntoView();"><span class="fa fa-binoculars" style="padding-right:5px;"></span>箱包配件</a>
                    </li>
                </ul>
            </div>
            <div class="col-md-9 col-sm-9 h-lunbotu" style="height:400px;padding:0 0 0 10px;">
                <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
                    <!-- Indicators -->
                    <ol class="carousel-indicators">
                        <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                    </ol>
                    <!-- Wrapper for slides -->
                    <div class="carousel-inner" role="listbox">
                        <div class="item active h-lb-item1">
                            <!--<img src="../../assets/img/lb1.jpg" alt="">-->
                            <div class="carousel-caption"></div>
                        </div>
                        <div class="item h-lb-item2">
                            <div class="carousel-caption"></div>
                        </div>
                        <div class="item h-lb-item3">
                            <div class="carousel-caption"></div>
                        </div>
                    </div>
                    <!-- Controls -->
                    <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev"> <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
 <span class="sr-only">Previous</span>
 
                    </a>
                    <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next"> <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
 <span class="sr-only">Next</span>
 
                    </a>
                </div>
            </div>
        </div>
        
        </div>
        <div class="ibox h-all-goods" style="width:100%;height:100%;padding:15px;margin-top: 20px;">
        
            <h3 id="h"><span class="fa fa-firefox" style="padding-right:5px;"></span>天天生鲜</h3>
            <div class="row">
                <div class="col-md-12 animated fadeInRight">
                    <div class="file-box">
                        <div class="file">
                            <a href=""> <span class="corner"></span>
 
                                <div class="image">
                                    <img alt="image" class="img-responsive" src="../../assets/img/1.jpg">
                                </div>
                                <div class="file-name"> <strong style="color:red;">清甜爽口</strong>
 
                                    <p>进口新西兰嘎啦果12个</p>￥:<strong style="color:#000">36.00</strong>
 
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
                                <div class="file-name"> <strong style="color:red;">香辣无比,等你来尝</strong>
 
                                    <p>韩国进口三养拉面火鸡面</p>￥:<strong style="color:#000">38.00</strong>
 
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
                                <div class="file-name"> <strong style="color:red;">新年更旺</strong>
 
                                    <p>新装旺仔牛奶</p>￥:<strong style="color:#000">42.00</strong>
 
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
                                <div class="file-name"> <strong style="color:red;">清甜爽口</strong>
 
                                    <p>进口新西兰嘎啦果12个</p>￥:<strong style="color:#000">36.00</strong>
 
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
            <h3 id="h-goods-link2"><span class="fa fa-twitter" style="padding-right:5px;">美味零食</h3>
            <div class="row">
                <div class="col-md-12 animated fadeInRight">
                    <div class="file-box">
                        <div class="file">
                            <a href=""> <span class="corner"></span>
 
                                <div class="image">
                                    <img alt="image" class="img-responsive" src="../../assets/img/1.jpg">
                                </div>
                                <div class="file-name"> <strong style="color:red;">清甜爽口</strong>
 
                                    <p>进口新西兰嘎啦果12个</p>￥:<strong style="color:#000">36.00</strong>
 
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
                                <div class="file-name"> <strong style="color:red;">香辣无比,等你来尝</strong>
 
                                    <p>韩国进口三养拉面火鸡面</p>￥:<strong style="color:#000">38.00</strong>
 
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
                                <div class="file-name"> <strong style="color:red;">新年更旺</strong>
 
                                    <p>新装旺仔牛奶</p>￥:<strong style="color:#000">42.00</strong>
 
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
                                <div class="file-name"> <strong style="color:red;">清甜爽口</strong>
 
                                    <p>进口新西兰嘎啦果12个</p>￥:<strong style="color:#000">36.00</strong>
 
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
            <h3 id="h-goods-link3"><span class="fa fa-apple" style="padding-right:5px;"></span>家用电器</h3>
            <div class="row">
                <div class="col-md-12 animated fadeInRight">
                    <div class="file-box">
                        <div class="file">
                            <a href=""> <span class="corner"></span>
 
                                <div class="image">
                                    <img alt="image" class="img-responsive" src="../../assets/img/1.jpg">
                                </div>
                                <div class="file-name"> <strong style="color:red;">清甜爽口</strong>
 
                                    <p>进口新西兰嘎啦果12个</p>￥:<strong style="color:#000">36.00</strong>
 
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
                                <div class="file-name"> <strong style="color:red;">香辣无比,等你来尝</strong>
 
                                    <p>韩国进口三养拉面火鸡面</p>￥:<strong style="color:#000">38.00</strong>
 
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
                                <div class="file-name"> <strong style="color:red;">新年更旺</strong>
 
                                    <p>新装旺仔牛奶</p>￥:<strong style="color:#000">42.00</strong>
 
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
                                <div class="file-name"> <strong style="color:red;">清甜爽口</strong>
 
                                    <p>进口新西兰嘎啦果12个</p>￥:<strong style="color:#000">36.00</strong>
 
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
            <h3 id="h-goods-link4"><span class="fa fa-gg-circle" style="padding-right:5px;"></span>居家家纺</h3>
            <div class="row">
                <div class="col-md-12 animated fadeInRight">
                    <div class="file-box">
                        <div class="file">
                            <a href=""> <span class="corner"></span>
 
                                <div class="image">
                                    <img alt="image" class="img-responsive" src="../../assets/img/1.jpg">
                                </div>
                                <div class="file-name"> <strong style="color:red;">清甜爽口</strong>
 
                                    <p>进口新西兰嘎啦果12个</p>￥:<strong style="color:#000">36.00</strong>
 
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
                                <div class="file-name"> <strong style="color:red;">香辣无比,等你来尝</strong>
 
                                    <p>韩国进口三养拉面火鸡面</p>￥:<strong style="color:#000">38.00</strong>
 
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
                                <div class="file-name"> <strong style="color:red;">新年更旺</strong>
 
                                    <p>新装旺仔牛奶</p>￥:<strong style="color:#000">42.00</strong>
 
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
                                <div class="file-name"> <strong style="color:red;">清甜爽口</strong>
 
                                    <p>进口新西兰嘎啦果12个</p>￥:<strong style="color:#000">36.00</strong>
 
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
            <h3 id="h-goods-link5"><span class="fa fa-delicious" style="padding-right:5px;"></span>文具用品</h3>
            <div class="row">
                <div class="col-md-12 animated fadeInRight">
                    <div class="file-box">
                        <div class="file">
                            <a href=""> <span class="corner"></span>
 
                                <div class="image">
                                    <img alt="image" class="img-responsive" src="../../assets/img/1.jpg">
                                </div>
                                <div class="file-name"> <strong style="color:red;">清甜爽口</strong>
 
                                    <p>进口新西兰嘎啦果12个</p>￥:<strong style="color:#000">36.00</strong>
 
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
                                <div class="file-name"> <strong style="color:red;">香辣无比,等你来尝</strong>
 
                                    <p>韩国进口三养拉面火鸡面</p>￥:<strong style="color:#000">38.00</strong>
 
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
                                <div class="file-name"> <strong style="color:red;">新年更旺</strong>
 
                                    <p>新装旺仔牛奶</p>￥:<strong style="color:#000">42.00</strong>
 
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
                                <div class="file-name"> <strong style="color:red;">清甜爽口</strong>
 
                                    <p>进口新西兰嘎啦果12个</p>￥:<strong style="color:#000">36.00</strong>
 
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
            <h3 id="h-goods-link6"><span class="fa fa-facebook" style="padding-right:5px;"></span>生活必备</h3>
            <div class="row">
                <div class="col-md-12 animated fadeInRight">
                    <div class="file-box">
                        <div class="file">
                            <a href=""> <span class="corner"></span>
 
                                <div class="image">
                                    <img alt="image" class="img-responsive" src="../../assets/img/1.jpg">
                                </div>
                                <div class="file-name"> <strong style="color:red;">清甜爽口</strong>
 
                                    <p>进口新西兰嘎啦果12个</p>￥:<strong style="color:#000">36.00</strong>
 
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
                                <div class="file-name"> <strong style="color:red;">香辣无比,等你来尝</strong>
 
                                    <p>韩国进口三养拉面火鸡面</p>￥:<strong style="color:#000">38.00</strong>
 
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
                                <div class="file-name"> <strong style="color:red;">新年更旺</strong>
 
                                    <p>新装旺仔牛奶</p>￥:<strong style="color:#000">42.00</strong>
 
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
                                <div class="file-name"> <strong style="color:red;">清甜爽口</strong>
 
                                    <p>进口新西兰嘎啦果12个</p>￥:<strong style="color:#000">36.00</strong>
 
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
            <h3 id="h-goods-link7"><span class="fa fa-safari" style="padding-right:5px;"></span>户外运动</h3>
            <div class="row">
                <div class="col-md-12 animated fadeInRight">
                    <div class="file-box">
                        <div class="file">
                            <a href=""> <span class="corner"></span>
 
                                <div class="image">
                                    <img alt="image" class="img-responsive" src="../../assets/img/1.jpg">
                                </div>
                                <div class="file-name"> <strong style="color:red;">清甜爽口</strong>
 
                                    <p>进口新西兰嘎啦果12个</p>￥:<strong style="color:#000">36.00</strong>
 
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
                                <div class="file-name"> <strong style="color:red;">香辣无比,等你来尝</strong>
 
                                    <p>韩国进口三养拉面火鸡面</p>￥:<strong style="color:#000">38.00</strong>
 
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
                                <div class="file-name"> <strong style="color:red;">新年更旺</strong>
 
                                    <p>新装旺仔牛奶</p>￥:<strong style="color:#000">42.00</strong>
 
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
                                <div class="file-name"> <strong style="color:red;">清甜爽口</strong>
 
                                    <p>进口新西兰嘎啦果12个</p>￥:<strong style="color:#000">36.00</strong>
 
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
            <h3 id="h-goods-link8"><span class="fa fa-tripadvisor" style="padding-right:5px;"></span>鲜花工坊</h3>
            <div class="row">
                <div class="col-md-12 animated fadeInRight">
                    <div class="file-box">
                        <div class="file">
                            <a href=""> <span class="corner"></span>
 
                                <div class="image">
                                    <img alt="image" class="img-responsive" src="../../assets/img/1.jpg">
                                </div>
                                <div class="file-name"> <strong style="color:red;">清甜爽口</strong>
 
                                    <p>进口新西兰嘎啦果12个</p>￥:<strong style="color:#000">36.00</strong>
 
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
                                <div class="file-name"> <strong style="color:red;">香辣无比,等你来尝</strong>
 
                                    <p>韩国进口三养拉面火鸡面</p>￥:<strong style="color:#000">38.00</strong>
 
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
                                <div class="file-name"> <strong style="color:red;">新年更旺</strong>
 
                                    <p>新装旺仔牛奶</p>￥:<strong style="color:#000">42.00</strong>
 
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
                                <div class="file-name"> <strong style="color:red;">清甜爽口</strong>
 
                                    <p>进口新西兰嘎啦果12个</p>￥:<strong style="color:#000">36.00</strong>
 
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
            <h3 id="h-goods-link9"><span class="fa fa-binoculars" style="padding-right:5px;">箱包配件</h3>
            <div class="row">
                <div class="col-md-12 animated fadeInRight">
                    <div class="file-box">
                        <div class="file">
                            <a href=""> <span class="corner"></span>
 
                                <div class="image">
                                    <img alt="image" class="img-responsive" src="../../assets/img/1.jpg">
                                </div>
                                <div class="file-name"> <strong style="color:red;">清甜爽口</strong>
 
                                    <p>进口新西兰嘎啦果12个</p>￥:<strong style="color:#000">36.00</strong>
 
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
                                <div class="file-name"> <strong style="color:red;">香辣无比,等你来尝</strong>
 
                                    <p>韩国进口三养拉面火鸡面</p>￥:<strong style="color:#000">38.00</strong>
 
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
                                <div class="file-name"> <strong style="color:red;">新年更旺</strong>
 
                                    <p>新装旺仔牛奶</p>￥:<strong style="color:#000">42.00</strong>
 
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
                                <div class="file-name"> <strong style="color:red;">清甜爽口</strong>
 
                                    <p>进口新西兰嘎啦果12个</p>￥:<strong style="color:#000">36.00</strong>
 
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
            
        </div>
        </div>
`,
            mounted: function () {

            }
        }
    )


})(Vue, $)
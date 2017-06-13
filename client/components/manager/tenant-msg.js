/**
 * Created by huangjin on 2017/5/29.
 */
;
(function (Vue, $) {
    //在初始化组件之前要先注册
    Vue.component('tenant-detail', {
            template: `
        <div>
        <h3 style="display: inline-block;">商户详细信息</h3>
        <div style="float: right;"><button class="btn btn-success" @click="addNewTenant">添加商户</button></div>
        <div class="animated fadeInRight">
        <div id="dtGridContainer_2_1_2" class="dt-grid-container h-tenant-detail"></div>
        <div id="dtGridToolBarContainer_2_1_2" class="dt-grid-toolbar-container"></div>
</div>

<div class="modal fade" id="myModal3" tabindex="-1" role="dialog">
  <div class="modal-dialog modal-md" role="document">
    <div class="modal-content animated lightSpeedIn">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" v-text="showMsgTitle" style="font-weight:normal;"></h4>
      </div>
      <div class="modal-body">
      <div class="row">
      <div class="col-md-12">
                <div class="ibox float-e-margins">
                    <div class="ibox-content">
                        <form class="form-horizontal m-t" id="signupForm">
                            <div class="form-group">
                                <label class="col-sm-3 control-label">商户名称：</label>
                                <div class="col-sm-8">
                                    <input name="shopname" class="form-control" type="text" v-model="shopname">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-3 control-label">经营人：</label>
                                <div class="col-sm-8">
                                    <input name="name" class="form-control" type="text" v-model="name">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-3 control-label">性别：</label>
                                <div class="col-sm-8">
                                    <input name="gender" class="form-control" type="text" v-model="gender">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-3 control-label">年龄：</label>
                                <div class="col-sm-8">
                                    <input name="age" class="form-control" type="text" v-model="age">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-3 control-label">电话：</label>
                                <div class="col-sm-8">
                                    <input name="phone" class="form-control" type="text" v-model="phone">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-3 control-label">E-mail：</label>
                                <div class="col-sm-8">
                                    <input name="email" class="form-control" type="text" v-model="email">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-3 control-label">店铺地址：</label>
                                <div class="col-sm-8">
                                    <input name="address" class="form-control" type="text" v-model="address">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-ms-8 col-md-offset-5 control-label" style="color:red;" v-text='errorMsg'></label>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
</div>

</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-info" data-dismiss="modal">取消</button>
        <button type="button" class="btn btn-info h-sure-btn" v-text="submitText"></button>
      </div>
    </div>
  </div>
</div>

</div>
`,
            data: function () {
                return {
                    allData: '',
                    errorMsg: '',
                    showMsgTitle: '',
                    submitText: '',
                    id: '',
                    shopname: '',
                    name: '',
                    gender: '',
                    age: '',
                    phone: '',
                    email: '',
                    address: ''
                }
            },
            methods: {
                //添加新商户模态框
                addNewTenant: function () {
                    this.showMsgTitle = '添加商户';
                    this.submitText = '添加';
                    //清空输入框
                    this.shopname = '';
                    this.name = '';
                    this.gender = '';
                    this.age = '';
                    this.phone = '';
                    this.email = '';
                    this.address = '';
                    $('#myModal3').modal('show');
                }
            },
            mounted: function () {
                var that = this;
                var dtgrid = '';
                that.$http.post('/getAllMsg', {emulateJSON: true}).then((res) => {
                    console.log(res.body.datas);
                    that.allData = res.body.datas;
                    var dtGridColumns_2_1_2 = [

                        {id: 'id', title: 'id', type: 'string', columnClass: 'text-center', hideType: 'lg|md|sm|xs'},
                        {
                            title: '商户编号',
                            type: 'string',
                            columnClass: 'text-center',
                            resolution: function (value, record, column, grid, dataNo, columnNo) {
                                return dataNo + 1;
                            }
                        },
                        {id: 'shopname', title: '商户名称', type: 'string', columnClass: 'text-center'},
                        {id: 'name', title: '经营人', type: 'string', columnClass: 'text-center'},
                        {id: 'gender', title: '性别', type: 'string', columnClass: 'text-center'},
                        {id: 'age', title: '年龄', type: 'string', columnClass: 'text-center'},
                        {id: 'phone', title: '电话', type: 'string', columnClass: 'text-center'},
                        {id: 'email', title: '邮箱', type: 'string', columnClass: 'text-center'},
                        {id: 'address', title: '地址', type: 'string', columnClass: 'text-center'},
                        {
                            id: 'status',
                            title: '用户状态',
                            type: 'string',
                            columnClass: 'text-center',
                            resolution: function (value, record, column, grid, dataNo, columnNo) {
                                switch (value) {
                                    case '0'://账户正常
                                        return '正常'
                                        break;
                                    case '1'://账户被禁用
                                        return '已被禁用'
                                        break;
                                    default:

                                }
                            }
                        },
                        {
                            id: 'operation',
                            title: '操作',
                            type: 'string',
                            columnClass: 'text-center',
                            resolution: function (value, record, column, grid, dataNo, columnNo) {

                                var content = '';
                                content += '<button class="btn btn-warning";" style="margin-right:10px;"><i class="fa fa-info"></i>修改</button>';

                                return content;
                            }
                        }

                    ];
                    var dtGridOption_2_1_2 = {
                        lang: 'zh-cn',
                        ajaxLoad: false,
                        exportFileName: '用户列表',
                        datas: that.allData,
                        columns: dtGridColumns_2_1_2,
                        gridContainer: 'dtGridContainer_2_1_2',
                        toolbarContainer: 'dtGridToolBarContainer_2_1_2',
                        tools: '',
                        pageSize: 15,
                        pageSizeLimit: [15, 20, 50]
                    };
                    var grid_2_1_2 = $.fn.DtGrid.init(dtGridOption_2_1_2);
                    grid_2_1_2.load();

                })
                //模态框确定按钮
                $('.h-sure-btn').click(function () {
                    //简单做个验证
                    if (that.shopname == '' || that.name == '' || that.gender == '' || that.age == '' || that.phone == '' || that.email == '' || that.address == '') {
                        that.errorMsg = '请将信息填写完整哦!'
                        return false;
                    }
                    that.errorMsg = '';
                    switch (that.showMsgTitle) {
                        case '添加商户':
                            //拿到所有参数
                            var getParams = {
                                shopname: that.shopname,
                                name: that.name,
                                gender: that.gender,
                                age: that.age,
                                phone: that.phone,
                                email: that.email,
                                address: that.address
                            }
                            //发送请求
                            that.$http.post('/addNewTenant', getParams, {emulateJSON: true}).then((res) => {
                                console.log(res.body);
                                if (res.body.code == 0) {//成功
                                    $('#myModal3').modal('hide');
                                } else {
                                    alert('插入数据失败');
                                }

                            });
                        case '账号修改':
                            //拿到所有参数
                            var getParams2 = {
                                shopname: that.shopname,
                                name: that.name,
                                gender: that.gender,
                                age: that.age,
                                phone: that.phone,
                                email: that.email,
                                address: that.address,
                                id: that.id
                            }
                            that.$http.post('/updateManyMsg', getParams2, {emulateJSON: true}).then((res) => {
                                console.log(res.body);
                                if (res.body.code == 0) {//批量更新成功
                                    $('#myModal3').modal('hide');
                                } else {
                                    alert('批量更新数据失败,检查下数据库!')
                                }
                            });
                    }

                });
                //点击修改
                $('.h-tenant-detail').on('click', '.btn-warning', function () {
                    that.id = $(this).parent().parent().children('td:eq(1)').text();
                    that.shopname = $(this).parent().parent().children('td:eq(3)').text();
                    that.name = $(this).parent().parent().children('td:eq(4)').text();
                    that.gender = $(this).parent().parent().children('td:eq(5)').text();
                    that.age = $(this).parent().parent().children('td:eq(6)').text();
                    that.phone = $(this).parent().parent().children('td:eq(7)').text();
                    that.email = $(this).parent().parent().children('td:eq(8)').text();
                    that.address = $(this).parent().parent().children('td:eq(9)').text();
                    that.showMsgTitle = '账号修改';
                    that.submitText = '修改';
                    that.errorMsg = '';
                    $('#myModal3').modal('show');
                })
            }
        }
    )


})(Vue, $)
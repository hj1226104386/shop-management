/**
 * Created by huangjin on 2017/5/29.
 */
;
(function (Vue, $) {
    //在初始化组件之前要先注册
    Vue.component('tenant-account', {
            template: `
        <div>
        <h3>账号管理</h3>
        <div class="animated fadeInRight">
        <div id="dtGridContainer_2_1_2" class="dt-grid-container h-tenant-account-manage"></div>
        <div id="dtGridToolBarContainer_2_1_2" class="dt-grid-toolbar-container"></div>
</div>

<div class="modal fade" id="myModal2" tabindex="-1" role="dialog">
  <div class="modal-dialog modal-sm" role="document">
    <div class="modal-content animated flipInY">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" v-text="showMsgTitle" style="font-weight:normal;"></h4>
      </div>
      <div class="modal-body"><strong v-text="showMsg"></strong></div>
      <div class="modal-footer">
        <button type="button" class="btn btn-info" data-dismiss="modal">取消</button>
        <button type="button" class="btn btn-info h-sure-btn">确定</button>
      </div>
    </div>
  </div>
</div>

</div>

`,
            data: function () {
                return {
                    getData: '',
                    showMsgTitle: '',
                    showMsg: '',
                    success: '',
                    username: '',
                    id: '',
                    trIndex: ''
                }
            },
            mounted: function () {
                var that = this;
                var dtgrid = '';
                that.$http.post('/findTenants').then(
                    (res) => {
                        this.success = true;
                        this.showMsg = '数据库查询失败!';
                        // $('#showAlert').modal('show');
                        console.log(res.body.datas);
                        that.getData = res.body.datas;
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
                            {id: 'username', title: '账号', type: 'string', columnClass: 'text-center'},
                            {id: 'name', title: '经营人', type: 'string', columnClass: 'text-center'},
                            {id: 'shopname', title: '商户名称', type: 'string', columnClass: 'text-center'},
                            {
                                id: 'status',
                                title: '账号状态',
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
                                title: '账号操作',
                                type: 'string',
                                columnClass: 'text-center',
                                resolution: function (value, record, column, grid, dataNo, columnNo) {
                                    // console.log(that.test());
                                    var content = '';
                                    switch (record.status) {
                                        case '0'://账户正常
                                            content += '<button class="btn btn-warning" style="margin-right:10px;"><i class="fa fa-info"></i><span>禁用</span></button>';
                                            content += '<button class="btn btn-danger" ><i class="fa fa-trash-o"></i><span>删除</span></button>';
                                            break;
                                        case '1'://账户被禁用
                                            content += '<button class="btn btn-success btn-small" style="margin-right:10px;"><i class="fa fa-info"></i><span>恢复</span></button>';
                                            content += '<button  class="btn btn-danger"><i class="fa fa-trash-o" ></i><span>删除</span></button>';
                                            break;
                                        default:

                                    }
                                    return content;
                                }

                            }];
                        var dtGridOption_2_1_2 = {
                            lang: 'zh-cn',
                            ajaxLoad: false,
                            exportFileName: '商户列表',
                            datas: that.getData,
                            columns: dtGridColumns_2_1_2,
                            gridContainer: 'dtGridContainer_2_1_2',
                            toolbarContainer: 'dtGridToolBarContainer_2_1_2',
                            tools: '',
                            pageSize: 15,
                            pageSizeLimit: [15, 20, 50]
                        };
                        var grid_2_1_2 = $.fn.DtGrid.init(dtGridOption_2_1_2);
                        dtgrid = grid_2_1_2;
                        grid_2_1_2.load();

                    },
                    (res) => {
                        this.showMsg = '数据库查询失败!';
                        this.success = false;
                        $('#showAlert').modal('show');
                    })

                //删除
                $('.h-tenant-account-manage').on('click', '.btn-danger', function () {
                    var getUserName = $(this).parent().parent().children('td:eq(6)').text();
                    var getId = $(this).parent().parent().children('td:eq(1)').text();
                    that.showMsgTitle = '删除操作';
                    that.username = getUserName;
                    that.id = getId;
                    that.showMsg = '此操作不可逆,确认要删除商户' + getUserName + '的账户信息吗?';
                    $('#myModal2').modal('show');
                });
                //恢复
                $('.h-tenant-account-manage').on('click', '.btn-success', function () {
                    var getUserName = $(this).parent().parent().children('td:eq(6)').text();
                    var getId = $(this).parent().parent().children('td:eq(1)').text();
                    that.trIndex = $(this).parent().parent().index();//保存index
                    that.showMsgTitle = '恢复操作';
                    that.username = getUserName;
                    that.id = getId;
                    that.showMsg = '确认要恢复商户' + getUserName + '的账户信息吗?';
                    $('#myModal2').modal('show');
                });
                //禁用
                $('.h-tenant-account-manage').on('click', '.btn-warning', function () {
                    var getUserName = $(this).parent().parent().children('td:eq(6)').text();
                    var getId = $(this).parent().parent().children('td:eq(1)').text();
                    that.trIndex = $(this).parent().parent().index();//保存index
                    that.showMsgTitle = '禁用操作';
                    that.username = getUserName;
                    that.id = getId;
                    that.showMsg = '确认要禁用商户' + getUserName + '的账户信息吗?';
                    $('#myModal2').modal('show');
                });

                //点击模态框确定,执行不同的函数
                $('#myModal2').on('click', '.h-sure-btn', function () {
                    var getTitle = that.showMsgTitle;
                    var getId = {id: that.id};
                    switch (getTitle) {
                        case '删除操作':
                            that.$http.post('/deleteOne', getId, {emulateJSON: true}).then(
                                (res) => {
                                    if (res.body.code == 0) {
                                        $('#myModal2').modal('hide');
                                        dtgrid.reload;
                                    } else {
                                        alert('数据库删除失败');
                                    }

                                }
                            )
                            break;
                        case '恢复操作':
                            that.$http.post('/recover', getId, {emulateJSON: true}).then(
                                (res) => {
                                    if (res.body.code == 0) {
                                        $('.h-tenant-account-manage tbody').find('tr').eq(that.trIndex).find('button:eq(0)').toggleClass('btn-warning btn-success').children('span').text('禁用');
                                        $('#myModal2').modal('hide');
                                        dtgrid.reload;
                                    } else {
                                        alert('数据更新失败');
                                    }

                                }
                            )
                            break;
                        case '禁用操作':
                            that.$http.post('/forbidden', getId, {emulateJSON: true}).then(
                                (res) => {
                                    if (res.body.code == 0) {
                                        $('.h-tenant-account-manage tbody').find('tr').eq(that.trIndex).find('button:eq(0)').toggleClass('btn-warning btn-success').children('span').text('恢复');
                                        $('#myModal2').modal('hide');
                                        dtgrid.reload;
                                    } else {
                                        alert('数据更新失败');
                                    }

                                }
                            )
                            break;
                        default:
                    }
                });
            }
        }
    )


})(Vue, $)
/**
 * Created by huangjin on 2017/5/29.
 */
;
(function (Vue, $) {
    //在初始化组件之前要先注册
    Vue.component('tenant-account', {
            template: `
        <div class="animated fadeInRight">
        <h3>账号管理</h3>
        <div>
        <div id="dtGridContainer_2_1_2" class="dt-grid-container"></div>
        <div id="dtGridToolBarContainer_2_1_2" class="dt-grid-toolbar-container"></div>
</div>
<div class="modal fade bs-example-modal-sm" id='showAlert' tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
  <div class="modal-dialog modal-sm" role="document">
    <div class="modal-content" v-text='showMsg'></div>
    <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
        <button type="button" class="btn btn-primary" v-if='!success'>确定</button>
      </div>
  </div>
</div>
</div>
`,
            data: function () {
                return {
                    getData: '',
                    showMsg:'',
                    success:''
                }
            },
            methods: {},
            mounted: function () {
                var that = this;
                that.$http.post('/findTenants').then(
                    (res) => {
                        this.success = true;
                        this.showMsg = '数据库查询失败!';
                        $('#showAlert').modal('show');
                        console.log(res.body.data);
                        that.getData = res.body.datas;
                        var dtGridColumns_2_1_2 = [
                            {
                                id: 'id',
                                title: '商户编号',
                                type: 'string',
                                columnClass: 'text-center',
                                resolution: function (value, record, column, grid, dataNo, columnNo) {
                                    return dataNo+1;
                                }
                            },
                            {id: 'shopname', title: '商户名称', type: 'string', columnClass: 'text-center'},
                            {id: 'name', title: '经营人', type: 'string', columnClass: 'text-center'},
                            {id: 'gender', title: '性别', type: 'string', columnClass: 'text-center'},
                            {id: 'username', title: '账号', type: 'string', columnClass: 'text-center'},
                            {id: 'status', title: '账号状态', type: 'string', columnClass: 'text-center',resolution:function (value, record, column, grid, dataNo, columnNo) {
                                switch (value){
                                    case 0://账户正常
                                        return '正常'
                                        break;
                                    case 1://账户被禁用
                                        return '已被禁用'
                                        break;
                                    default:

                                }
                            }},
                            {
                                id: 'operation',
                                title: '账号操作',
                                type: 'string',
                                columnClass: 'text-center',
                                resolution: function (value, record, column, grid, dataNo, columnNo) {
                                    var content = '';
                                    switch (record.status) {
                                        case 0://账户正常
                                            content += '<button class="btn btn-warning";" style="margin-right:10px;"><i class="fa fa-info"></i>禁用</button>';
                                            content += '<button class="btn btn-danger";"><i class="fa fa-trash-o"></i>删除</button>';
                                            break;
                                        case 1://账户被禁用
                                            content += '<button class="btn btn-success btn-small");" style="margin-right:10px;"><i class="fa fa-info"></i>恢复</button>';
                                            content += '<button class="btn btn-danger";"><i class="fa fa-trash-o"></i>删除</button>';
                                            break;
                                        default:

                                    }
                                    return content;
                                }

                            }];
                        var dtGridOption_2_1_2 = {
                            lang: 'zh-cn',
                            ajaxLoad: false,
                            exportFileName: '用户列表',
                            datas: that.getData,
                            columns: dtGridColumns_2_1_2,
                            gridContainer: 'dtGridContainer_2_1_2',
                            toolbarContainer: 'dtGridToolBarContainer_2_1_2',
                            tools: '',
                            pageSize: 15,
                            pageSizeLimit: [15, 20, 50]
                        };
                        var grid_2_1_2 = $.fn.DtGrid.init(dtGridOption_2_1_2);
                        grid_2_1_2.load();

                    },
                    (res) => {
                        this.showMsg = '数据库查询失败!';
                        this.success = false;
                        $('#showAlert').modal('show');
                    })
            }
        }
    )


})(Vue, $)
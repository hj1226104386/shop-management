/**
 * Created by huangjin on 2017/5/29.
 */
;
(function (Vue, $) {
    //在初始化组件之前要先注册
    Vue.component('tenant-order', {
            template: `
        <div>
        <h3 style="display: inline-block;">商户订单</h3>
        <div style="float: right;"><button class="btn btn-primary"><i class='fa fa-refresh fa-spin'></i>刷新</button></div>
        <div class="animated fadeInRight">
        <div id="dtGridContainer_2_1_2" class="dt-grid-container h-tenants-order"></div>
        <div id="dtGridToolBarContainer_2_1_2" class="dt-grid-toolbar-container"></div>
</div>

<div class="modal fade" id="myModal5" tabindex="-1" role="dialog">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content animated flipInY">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" style="font-weight:normal;">订单详情</h4>
      </div>
      <div class="modal-body">
      <table class="table table-bordered">
      <thead>
      <tr>
      <th>用户ID</th>
      <th>用户手机</th>
      <th>订单编号</th>
      <th>订单</th>
      <th>总价</th>
      <th>支付时间</th>
      <th>支付状态</th>
      <th>物流状态</th>
</tr>
</thead>
<tbody>
<tr v-for="one in orderMsg">
<td>{{one.customer}}</td>
<td>{{one.cusPhone}}</td>
<td>{{one.orderCode}}</td>
<td>{{one.orderName}}</td>
<td>{{one.allPrice}}</td>
<td>{{one.payTime}}</td>
<td>{{one.payStatus}}</td>
<td>{{one.expressStatus}}</td>
</tr>
</tbody>
</table>
</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-info" data-dismiss="modal">确定</button>
      </div>
    </div>
  </div>
</div>

</div>
`,
            data: function () {
                return {
                    tenantsMsg: '',
                    orderMsg: ''
                }
            },
            methods: {
                show: function () {
                    alert('ahaha')
                }
            },
            mounted: function () {
                var that = this;
                that.$http.post('/getAllTenants', {}, {emulateJSON: true}).then((res) => {
                    that.tenantsMsg = res.body.datas;
                    var dtGridColumns_2_1_2 = [
                        {id: 'id', title: 'ID', type: 'string', columnClass: 'text-center', hideType: 'lg|md|sm|xs'},
                        {
                            title: '商户编号',
                            type: 'string',
                            columnClass: 'text-center',
                            resolution: function (value, record, column, grid, dataNo, columnNo) {
                                return dataNo + 1;
                            }
                        },
                        {id: 'shopname', title: '商户名称', type: 'string', columnClass: 'text-center'},
                        {id: 'address', title: '地址', type: 'string', columnClass: 'text-center'},
                        {title:'订单数量', type:'string', columnClass:'text-center',columnStyle:'color:red;font-weight:600;',resolution:function () {
                         return 4;
                         }},
                        {title:'操作', type:'string', columnClass:'text-center', resolution:function(value, record, column, grid, dataNo, columnNo){

                         var content = '';
                         content += '<button class="btn btn-success";" style="margin-right:10px;"><i class="fa fa-eye"></i>查看订单</button>';
                         return content;
                         }
                         }

                    ];
                    var dtGridOption_2_1_2 = {
                        lang: 'zh-cn',
                        ajaxLoad: false,
                        exportFileName: '用户列表',
                        datas: this.tenantsMsg,
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
                that.$http.post('/getOneTenantOrders', {}, {emulateJSON: true}).then((res) => {
                    that.orderMsg = res.body.datas;
                    console.log(res.body.datas);
                })

                $('.h-tenants-order').on('click','.btn-success',function () {
                    $('#myModal5').modal('show');
                })

            }
        }
    )


})(Vue, $)
/**
 * Created by huangjin on 2017/5/29.
 */
;
(function (Vue,$) {
    //在初始化组件之前要先注册
    Vue.component('tenant-order',{
        template:`
        <div>
        <h3 style="display: inline-block;">商户订单</h3>
        <div style="float: right;"><button class="btn btn-primary"><i class='fa fa-refresh fa-spin'></i>刷新</button></div>
        <div class="animated fadeInRight">
        <div id="dtGridContainer_2_1_2" class="dt-grid-container"></div>
        <div id="dtGridToolBarContainer_2_1_2" class="dt-grid-toolbar-container"></div>
</div>
</div>
`,
        methods:{
        show:function () {
            alert('ahaha')
        }
    },
        mounted:function () {
            var dtGridColumns_2_1_2 = [

                {id:'code', title:'商户编号', type:'string', columnClass:'text-center'},
                {id:'tenant', title:'商户名称', type:'string', columnClass:'text-center'},
                {id:'address', title:'地址', type:'string', columnClass:'text-center'},
                {id:'orderNum', title:'订单数量', type:'string', columnClass:'text-center',columnStyle:'color:red;font-weight:600;'},
                {id:'operation', title:'操作', type:'string', columnClass:'text-center', resolution:function(value, record, column, grid, dataNo, columnNo){

                    var content = '';
                    content += '<button class="btn btn-success";" style="margin-right:10px;"><i class="fa fa-eye"></i>查看订单</button>';
                    return content;
                }}

            ];
            var datas = [
                {"code":'001',"tenant":"天天便利店","address":"建材西路金燕龙办公楼","orderNum":"18"},
                {"code":'001',"tenant":"天天便利店","address":"建材西路金燕龙办公楼","orderNum":"18"},
                {"code":'001',"tenant":"天天便利店","address":"建材西路金燕龙办公楼","orderNum":"18"},
                {"code":'001',"tenant":"天天便利店","address":"建材西路金燕龙办公楼","orderNum":"18"},
                {"code":'001',"tenant":"天天便利店","address":"建材西路金燕龙办公楼","orderNum":"18"},
                {"code":'001',"tenant":"天天便利店","address":"建材西路金燕龙办公楼","orderNum":"18"},
                {"code":'001',"tenant":"天天便利店","address":"建材西路金燕龙办公楼","orderNum":"18"}
            ]
            var dtGridOption_2_1_2 = {
                lang : 'zh-cn',
                ajaxLoad : false,
                exportFileName : '用户列表',
                datas : datas,
                columns : dtGridColumns_2_1_2,
                gridContainer : 'dtGridContainer_2_1_2',
                toolbarContainer : 'dtGridToolBarContainer_2_1_2',
                tools : '',
                pageSize : 15,
                pageSizeLimit : [15, 20, 50]
            };
            var grid_2_1_2 = $.fn.DtGrid.init(dtGridOption_2_1_2);
            grid_2_1_2.load();
        }
    }
    )



})(Vue,$)
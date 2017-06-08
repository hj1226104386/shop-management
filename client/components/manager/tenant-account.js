/**
 * Created by huangjin on 2017/5/29.
 */
;
(function (Vue,$) {
    //在初始化组件之前要先注册
    Vue.component('tenant-account',{
        template:`
        <div>
        <h3>账号管理</h3>
        <div class="animated fadeInRight">
        <div id="dtGridContainer_2_1_2" class="dt-grid-container"></div>
        <div id="dtGridToolBarContainer_2_1_2" class="dt-grid-toolbar-container"></div>
</div>
</div>
`,
        data:function () {
            return {

            }
        },
        methods:{
        show:function () {
            alert('ahaha')
        }
    },
        mounted:function () {
            var dtGridColumns_2_1_2 = [

                {id:'code', title:'商户编号', type:'string', columnClass:'text-center'},
                {id:'tenant', title:'商户名称', type:'string', columnClass:'text-center'},
                {id:'charger', title:'经营人', type:'string', columnClass:'text-center'},
                {id:'sex', title:'性别', type:'string', columnClass:'text-center'},
                {id:'account', title:'账号', type:'string', columnClass:'text-center'},
                {id:'status', title:'账号状态', type:'string', columnClass:'text-center'},
                {id:'operation', title:'账号操作', type:'string', columnClass:'text-center', resolution:function(value, record, column, grid, dataNo, columnNo){

                    var content = '';
                    content += '<button class="btn btn-success btn-small");" style="margin-right:10px;"><i class="fa fa-edit"></i>恢复</button>';
                    content += '<button class="btn btn-warning";" style="margin-right:10px;"><i class="fa fa-info"></i>禁用</button>';
                    content += '<button class="btn btn-danger";"><i class="fa fa-trash-o"></i>删除</button>';

                    return content;
                }},

            ];
            var datas = [
                {"code":'001',"tenant":"天天便利店","charger":"张三","sex":"男","account":"建筑学1202","status":"正常"},
                {"code":'001',"tenant":"天天便利店","charger":"张三","sex":"男","account":"建筑学1202","status":"正常"},
                {"code":'001',"tenant":"天天便利店","charger":"张三","sex":"男","account":"建筑学1202","status":"正常"},
                {"code":'001',"tenant":"天天便利店","charger":"张三","sex":"男","account":"建筑学1202","status":"正常"},
                {"code":'001',"tenant":"天天便利店","charger":"张三","sex":"男","account":"建筑学1202","status":"正常"},
                {"code":'001',"tenant":"天天便利店","charger":"张三","sex":"男","account":"建筑学1202","status":"正常"},
                {"code":'001',"tenant":"天天便利店","charger":"张三","sex":"男","account":"建筑学1202","status":"正常"},
                {"code":'001',"tenant":"天天便利店","charger":"张三","sex":"男","account":"建筑学1202","status":"正常"},
                {"code":'001',"tenant":"天天便利店","charger":"张三","sex":"男","account":"建筑学1202","status":"正常"},
                {"code":'001',"tenant":"天天便利店","charger":"张三","sex":"男","account":"建筑学1202","status":"正常"},
                {"code":'001',"tenant":"天天便利店","charger":"张三","sex":"男","account":"建筑学1202","status":"正常"},
                {"code":'001',"tenant":"天天便利店","charger":"张三","sex":"男","account":"建筑学1202","status":"正常"},
                {"code":'001',"tenant":"天天便利店","charger":"张三","sex":"男","account":"建筑学1202","status":"正常"},
                {"code":'001',"tenant":"天天便利店","charger":"张三","sex":"男","account":"建筑学1202","status":"正常"},
                {"code":'001',"tenant":"天天便利店","charger":"张三","sex":"男","account":"建筑学1202","status":"正常"},
                {"code":'001',"tenant":"天天便利店","charger":"张三","sex":"男","account":"建筑学1202","status":"正常"},
                {"code":'001',"tenant":"天天便利店","charger":"张三","sex":"男","account":"建筑学1202","status":"正常"},
                {"code":'001',"tenant":"天天便利店","charger":"张三","sex":"男","account":"建筑学1202","status":"正常"},
                {"code":'001',"tenant":"天天便利店","charger":"张三","sex":"男","account":"建筑学1202","status":"正常"},
                {"code":'001',"tenant":"天天便利店","charger":"张三","sex":"男","account":"建筑学1202","status":"正常"},
                {"code":'001',"tenant":"天天便利店","charger":"张三","sex":"男","account":"建筑学1202","status":"正常"},
                {"code":'001',"tenant":"天天便利店","charger":"张三","sex":"男","account":"建筑学1202","status":"正常"},
                {"code":'001',"tenant":"天天便利店","charger":"张三","sex":"男","account":"建筑学1202","status":"正常"}
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
                pageSize : 13,
                pageSizeLimit : [13, 20, 50]
            };
            var grid_2_1_2 = $.fn.DtGrid.init(dtGridOption_2_1_2);
            grid_2_1_2.load();
        }
    }
    )



})(Vue,$)
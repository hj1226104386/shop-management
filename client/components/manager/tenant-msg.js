/**
 * Created by huangjin on 2017/5/29.
 */
;
(function (Vue,$) {
    //在初始化组件之前要先注册
    Vue.component('tenant-detail',{
        template:`
        <div>
        <h3 style="display: inline-block;">商户详细信息</h3>
        <div style="float: right;"><button class="btn btn-success">添加商户</button></div>
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
                {id:'charger', title:'经营人', type:'string', columnClass:'text-center'},
                {id:'sex', title:'性别', type:'string', columnClass:'text-center'},
                {id:'age', title:'年龄', type:'string', columnClass:'text-center'},
                {id:'phone', title:'电话', type:'string', columnClass:'text-center'},
                {id:'mail', title:'邮箱', type:'string', columnClass:'text-center'},
                {id:'address', title:'地址', type:'string', columnClass:'text-center'},
                {id:'operation', title:'操作', type:'string', columnClass:'text-center', resolution:function(value, record, column, grid, dataNo, columnNo){

                    var content = '';
                    content += '<button class="btn btn-warning";" style="margin-right:10px;"><i class="fa fa-info"></i>修改</button>';
                    content += '<button class="btn btn-danger";"><i class="fa fa-trash-o"></i>删除</button>';

                    return content;
                }}

            ];
            var datas = [
                {"code":'001',"tenant":"天天便利店","charger":"张三","sex":"男","age":"18","phone":"18586527978","mail":"6666@qq.com","address":"建材西路金燕龙办公楼","other":"无",},
                {"code":'001',"tenant":"天天便利店","charger":"张三","sex":"男","age":"18","phone":"18586527978","mail":"6666@qq.com","address":"建材西路金燕龙办公楼","other":"无",},
                {"code":'001',"tenant":"天天便利店","charger":"张三","sex":"男","age":"18","phone":"18586527978","mail":"6666@qq.com","address":"建材西路金燕龙办公楼","other":"无",},
                {"code":'001',"tenant":"天天便利店","charger":"张三","sex":"男","age":"18","phone":"18586527978","mail":"6666@qq.com","address":"建材西路金燕龙办公楼","other":"无",},
                {"code":'001',"tenant":"天天便利店","charger":"张三","sex":"男","age":"18","phone":"18586527978","mail":"6666@qq.com","address":"建材西路金燕龙办公楼","other":"无",},
                {"code":'001',"tenant":"天天便利店","charger":"张三","sex":"男","age":"18","phone":"18586527978","mail":"6666@qq.com","address":"建材西路金燕龙办公楼","other":"无",},
                {"code":'001',"tenant":"天天便利店","charger":"张三","sex":"男","age":"18","phone":"18586527978","mail":"6666@qq.com","address":"建材西路金燕龙办公楼","other":"无",},
                {"code":'001',"tenant":"天天便利店","charger":"张三","sex":"男","age":"18","phone":"18586527978","mail":"6666@qq.com","address":"建材西路金燕龙办公楼","other":"无",},
                {"code":'001',"tenant":"天天便利店","charger":"张三","sex":"男","age":"18","phone":"18586527978","mail":"6666@qq.com","address":"建材西路金燕龙办公楼","other":"无",},
                {"code":'001',"tenant":"天天便利店","charger":"张三","sex":"男","age":"18","phone":"18586527978","mail":"6666@qq.com","address":"建材西路金燕龙办公楼","other":"无",},
                {"code":'001',"tenant":"天天便利店","charger":"张三","sex":"男","age":"18","phone":"18586527978","mail":"6666@qq.com","address":"建材西路金燕龙办公楼","other":"无",},
                {"code":'001',"tenant":"天天便利店","charger":"张三","sex":"男","age":"18","phone":"18586527978","mail":"6666@qq.com","address":"建材西路金燕龙办公楼","other":"无",},
                {"code":'001',"tenant":"天天便利店","charger":"张三","sex":"男","age":"18","phone":"18586527978","mail":"6666@qq.com","address":"建材西路金燕龙办公楼","other":"无",},
                {"code":'001',"tenant":"天天便利店","charger":"张三","sex":"男","age":"18","phone":"18586527978","mail":"6666@qq.com","address":"建材西路金燕龙办公楼","other":"无",},
                {"code":'001',"tenant":"天天便利店","charger":"张三","sex":"男","age":"18","phone":"18586527978","mail":"6666@qq.com","address":"建材西路金燕龙办公楼","other":"无",},
                {"code":'001',"tenant":"天天便利店","charger":"张三","sex":"男","age":"18","phone":"18586527978","mail":"6666@qq.com","address":"建材西路金燕龙办公楼","other":"无",},
                {"code":'001',"tenant":"天天便利店","charger":"张三","sex":"男","age":"18","phone":"18586527978","mail":"6666@qq.com","address":"建材西路金燕龙办公楼","other":"无",},
                {"code":'001',"tenant":"天天便利店","charger":"张三","sex":"男","age":"18","phone":"18586527978","mail":"6666@qq.com","address":"建材西路金燕龙办公楼","other":"无",},
                {"code":'001',"tenant":"天天便利店","charger":"张三","sex":"男","age":"18","phone":"18586527978","mail":"6666@qq.com","address":"建材西路金燕龙办公楼","other":"无",}
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
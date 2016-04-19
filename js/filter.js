
$(function(){
    /*===========筛选条件a链接的点击事件封装==============*/
    $(".filterdl dd a").on("click",function(event){
        event.preventDefault();
        var filterdl_index = $(this).closest(".filterdl").index();//获取父级dl的索引index
        /*给所选中的a标签添加父级索引并且添加class selected*/
        $(this).data("index",filterdl_index).addClass("selected").siblings().removeClass("selected");
        /*如果所选a标签为“全部”的话，则在所选结果处要删除所选标签*/
        if ($(this).hasClass("select-all")) {
            //$("#selectE").remove();
            $(".select-no a.selectitem"+filterdl_index).remove();
        /*如果所选a标签不是“全部”的话，则需要克隆一个，然后添加到所选条件的结果中*/
        } else {
            var copyThisC = $(this).clone();
            /*如果所选条件结果集中含有本类标签，则只替换文字*/
            if ($(".selectitem"+filterdl_index).length > 0) {
                $(".selectitem"+filterdl_index).html($(this).text());
            } else {
                $(".select-result dd").append(copyThisC.addClass("selectitem"+filterdl_index).data("index",filterdl_index));
            }
        }
    })
    /*点击所选条件结果集中的a标签，执行的操作是删除本按钮，并且把对应的类的全部添加选中*/
    $("body").on("click", ".select-no .selected",function (event) {
        event.preventDefault();
        var data_index = $(this).data("index")-1;
        if($(this).hasClass("select-all")){
            return;
        }else{
            $(this).remove();
            $(".filterdl").eq(data_index).find(".select-all").addClass("selected").siblings().removeClass("selected");
        }
        
    });
    /*===========筛选条件a链接的点击事件封装==============*/
    
});


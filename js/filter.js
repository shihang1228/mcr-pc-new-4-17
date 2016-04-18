
$(document).ready(function(){

    $("#select1 dd a").click(function (event) {
        event.preventDefault();
        $(this).addClass("selected").siblings().removeClass("selected");
        if ($(this).hasClass("select-all")) {
            $(".dl_2").hide();
            $(".dl_1").hide();
            $(".select-result dd #selectD").remove();
            $("#select4 dd a[class='select-all']").addClass("selected").siblings().removeClass("selected");
            $("#selectA").remove();
        } else {
            var copyThisA = $(this).clone();
            var kindid = copyThisA.text();
            if(copyThisA.text() == "原木") {
                $(".dl_2").hide();
                $(".dl_1").show();


                // $.ajax({
                //     type: "get",
                //     dataType: "json",
                //     url: "spot?kindid="+kindid,
                //     //async:false, //是否异步
                //     complete :function(){ }, //AJAX请求完成时
                //     success: function(data){
                //        ajax_page(data);
                //     },
                //     error:function(){
                //         alert("失败");
                //     }
                // })

            }else{
                $(".dl_1").hide();
                $(".dl_2").show();
                $(".select-result dd #selectD").remove();
                $("#select4 dd a[class='select-all']").addClass("selected").siblings().removeClass("selected");
            }
            if ($("#selectA").length > 0) {
                $("#selectA").html($(this).text());
            } else {
                $(".select-result dd").append(copyThisA.attr("id", "selectA"));
            }
        }
    });

    $("#select2 dd a").click(function (event) {
        event.preventDefault();
        $(this).addClass("selected").siblings().removeClass("selected");
        if ($(this).hasClass("select-all")) {
            $("#selectB").remove();
        } else {
            var copyThisB = $(this).clone();
            if ($("#selectB").length > 0) {
                $("#selectB").html($(this).text());
            } else {
                $(".select-result dd").append(copyThisB.attr("id", "selectB"));
            }
        }
    });
    
    $("#select3 dd a").click(function (event) {
        event.preventDefault();
        $(this).addClass("selected").siblings().removeClass("selected");
        if ($(this).hasClass("select-all")) {
            $("#selectC").remove();
        } else {
            var copyThisC = $(this).clone();
            if ($("#selectC").length > 0) {
                $("#selectC").html($(this).text());
            } else {
                $(".select-result dd").append(copyThisC.attr("id", "selectC"));
            }
        }
    });

    $("#select4 dd a").click(function (event) {
        event.preventDefault();
        $(this).addClass("selected").siblings().removeClass("selected");
        if ($(this).hasClass("select-all")) {
            $("#selectD").remove();
        } else {
            var copyThisC = $(this).clone();
            if ($("#selectD").length > 0) {
                $("#selectD").html($(this).text());
            } else {
                $(".select-result dd").append(copyThisC.attr("id", "selectD"));
            }
        }
    });

    $("#select5 dd a").click(function (event) {
        event.preventDefault();
        $(this).addClass("selected").siblings().removeClass("selected");
        if ($(this).hasClass("select-all")) {
            $("#selectE").remove();
        } else {
            var copyThisC = $(this).clone();
            if ($("#selectE").length > 0) {
                $("#selectE").html($(this).text());
            } else {
                $(".select-result dd").append(copyThisC.attr("id", "selectE"));
            }
        }
    });
    
    $("body").on("click", "#selectA",function (event) {
        event.preventDefault();
        $(this).remove();
        $("#selectD").remove();
        $(".dl_1").hide();
        $(".dl_2").hide();
        $("#select4 dd a[class='select-all']").addClass("selected").siblings().removeClass("selected");
        $("#select1 .select-all").addClass("selected").siblings().removeClass("selected");
    });
    
    $("body").on("click", "#selectB",function (event) {
        event.preventDefault();
        $(this).remove();
        $("#select2 .select-all").addClass("selected").siblings().removeClass("selected");
    });
    
    $("body").on("click", "#selectC",function (event) {
        event.preventDefault();
        $(this).remove();
        $("#select3 .select-all").addClass("selected").siblings().removeClass("selected");
    });

    $("body").on("click", "#selectD",function (event) {
        event.preventDefault();
        $(this).remove();
        $("#select4 .select-all").addClass("selected").siblings().removeClass("selected");
    });
    
    $("body").on("click", "#selectE",function (event) {
        event.preventDefault();
        $(this).remove();
        $("#select5 .select-all").addClass("selected").siblings().removeClass("selected");
    });

    $(".select dd").on("click", function () {
        if ($(".select-result dd").length > 1) {
            $(".select-no").hide();
        } else {
            $(".select-no").show();
        }
    });
    
});


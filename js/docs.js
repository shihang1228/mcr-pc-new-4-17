$(function() {
	$(window).bind('scroll',function(){
	
		if($(window).scrollTop()>50){
			$('.naver').addClass('docs-naver-fixed');	
		}
		else{
			$('.naver').removeClass('docs-naver-fixed');
		}
	})
	
	
});

//��������(����,ƫ��,�ı����ʽ,�ǻʱ���ض���)
$(function(){ 
	$(window).bind("scroll",function(){ 
	
		$('.naver').not('.nojs').find('li').not('.nojs').each(function(){
			var top=$(window).scrollTop();
			
			if($($(this).find('a').attr("href")).size() > 0){
				var thisOffsetTop =$($(this).find('a').attr("href")).offset().top;	
			}
			
			
			if (thisOffsetTop -top<200){
				$(this).closest('.naver').find("li").not('.nojs').removeClass("selected");
				$(this).addClass("selected");
			};
		});
	}); 

})




/*!
 * 切图Slicy4Fullpage Slicy4Fullpage v1.0
 *
 * Copyright 2014 Qietu.com, Inc
 * Licensed under the Apache License v2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 */
 
 
 $(function() {
	/*$(".panel").css({"height":$(window).height()});
	$.scrollify({
		section:".panel",
		before:function(i){
			if(i==0){
				//$(i).preventDefault();	
			}
		},
		after:function(i){
			$('.Slicy4FullpageNav li').removeClass('current');
			$('.Slicy4FullpageNav li').eq(i).addClass('current');
			}
	});
	

	$(".Slicy4FullpageNav li").click(function(e) {
		e.preventDefault();
		$.scrollify("move",$(this).find('a').attr("href"));
	});*/
	
	$('.Slicy4FullpagePage').css('height',$(window).height());
	
	$(window).resize(function(){
		$('.Slicy4FullpagePage').css('height',$(window).height());					  
	})
	
	
	
	$('html,body').animate({'scrollTop':0});
	
	var scrollpage = function(a,c){
			delta = a;
			/*向下*/
			if(delta== -1){
				//console.log($(this).scrollTop());
				
				next_nav_li = $('.Slicy4FullpageNav .selected').next();
				
			}
			/*向上*/
			else if(delta== 1){
				
				next_nav_li = $('.Slicy4FullpageNav .selected').prev();
					
			}
			
			if(next_nav_li.size()<1){
				return false;	
			}
			next_page = $(next_nav_li.find('a').attr('href'));
			
			/*当前页添加active样式*/
			$('.Slicy4FullpagePage').removeClass('active');
			next_page.addClass('active');
			
			//console.log(next_page.offset().top);
			$('html,body').stop().animate({'scrollTop':next_page.offset().top},'normal','swing',function(){
																									   
				$('.Slicy4FullpageNav li').removeClass('selected');
				next_nav_li.addClass('selected');
				
				if(!next_nav_li.hasClass('hide')){
					$('.Slicy4FullpageNav li').removeClass('Slicy4FullpageNavCurr');
					next_nav_li.addClass('Slicy4FullpageNavCurr');
				}
				
			});
	}
	
	var i = !1; !
	$('body').mousewheel(function(event, delta) {
                        //console.log(delta);
                        //event.stopPropagation();
                        //event.preventDefault();
						
						if (!$('html,body').is(":animated") && !i) {
							i = !0,
							setTimeout(function() {
								i = !1
							},
							'normal');
							
							scrollpage(delta,null);
							
						}
						
						
      });
	
	
	$('.Slicy4FullpageNav li, .naver li').click(function(){
		$('html,body').stop().animate({'scrollTop':$($(this).find('a').attr('href')).offset().top},'slow','swing');	
		
		$('.Slicy4FullpageNav li').removeClass('Slicy4FullpageNavCurr').eq($(this).index()).addClass('Slicy4FullpageNavCurr');
		$('.Slicy4FullpageNav li').removeClass('selected').eq($(this).index()).addClass('selected');
		
		/*当前页添加active样式*/
			$('.Slicy4FullpagePage').removeClass('active');
			 $($(this).find('a').attr('href')).addClass('active');
		
		
	})
	
});



//三大服务鼠标移上去往上移动

$(document).ready(function(){
	$("#ife_3 span").hover(function(){
       $(this).animate({
          top:"-40px"
       });
	   $(this).children("i").fadeIn();
	   
     },function(){
		$(this).stop(true,false);
		   $(this).animate({
			  top:"0px"
		   });
		$(this).children("i").fadeOut();
     });
 
 
});


//页面间上翻和下翻
$(document).ready(function(){
	$("#overpage").click(function(g) {
		g.preventDefault();
		$("html, body").animate({scrollTop: 40+$(".ife_div").height()}, 1000);
	});
	$("#uppage").click(function(g) {
		g.preventDefault();
		$("html, body").animate({scrollTop: 40-$(".ife_div").height()}, 1000);
	});
});
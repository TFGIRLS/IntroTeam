
//��������������ȥ�����ƶ�

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


//ҳ����Ϸ����·�
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
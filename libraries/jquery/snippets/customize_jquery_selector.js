$(document).ready(function() { 

	$.extend($.expr[':'], { 
		moreThen1000px: function(a) { 
			return $(a).width() > 1000; 
		} 
	}); 

	$('.box:moreThen1000px').click(function() { 
		// creating a simple js alert box 
		alert('The element that you have clicked is over 1000 pixels wide'); 
	}); 
});



作者： GD_SeHun 
链接：http://www.imooc.com/article/2433
来源：慕课网
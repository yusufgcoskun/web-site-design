$(document).ready(function(){
	 
	
	$(".fa-bars").on("click",function(){
	if ($("header nav ul").hasClass( "open" )){
		
		$("header nav ul").removeClass("open animated fadeInDown slow").addClass("close animated fadeOutUp slow");
		$(".close").css('display','none');
		
		$(window).resize(function() {
			if ($(window).width() >768) {
				
				$("header nav ul").removeClass("close animated fadeOutUp slow")
				$("header nav ul").css('display','inline');	
			}else{
				$("header nav ul").css('display','none');	
			}
			

		});
		
	}else{
		$("header nav ul").removeClass("close animated fadeOutUp slow").addClass("open animated fadeInDown slow");
		$(".open").css('display','inline');	
	}
	});
});



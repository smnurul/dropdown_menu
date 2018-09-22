jQuery(document).ready(function($){
	
	$('.main-menu').slicknav();
    $('.slicknav_parent').click(function(){
       $('.slicknav_parent ul').removeClass('sub_menu') 
        
    });
	//    master li scroolwer
    $('.you-are-master').liScroll();
 
});
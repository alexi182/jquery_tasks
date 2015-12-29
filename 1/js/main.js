(function($){

	$(".products").on('click', function(event) {

		event.preventDefault();
		$(this).siblings(".menu_list_products").slideToggle(); 
	});

	$(".tabs_head").on('click', function(event){
		
		event.preventDefault();
		$('.tabs_content').hide();
		var content = $(this).attr('href');
		var showContent = $(content).fadeIn();

		$(this).addClass('active').siblings('.tabs_head').removeClass('active');

	}); 
		$(".tabs_head:first").trigger("click");

		
	$('.accordion').find('.title').on('click', function(){
		$(this).next().slideToggle();
	}); 

})(window.jQuery);


1

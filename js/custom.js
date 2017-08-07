$(function(){

	$('.button-nav').click(function(){
		$(this).toggleClass('active'), 
		$('.main-nav-list').slideToggle(); 
		return false;
	});

});

var handler = function(){
	
	var height_footer = $('footer').height();	
	var height_header = $('header').height();	
	$('.content').css({'padding-bottom':height_footer});	
}

$(function() {
	$('.styler').styler();

	
// phone open	
	$('.header-phone__link').click(function(){
		$(this).toggleClass('active')		 
		return false;
	});

// FlipClock

	var clock = $('.clock').FlipClock(3600 * 24 * 32, {
	        clockFace: 'DailyCounter',
	        countdown: true
	    });


// accordion
	$(".faq-accordion__title").click(function() {
	$(this).parent().children("ul").slideToggle('fast');
	if ($(this).hasClass("minus")) $(this).removeClass("minus").addClass("plus");
	else $(this).removeClass("plus").addClass("minus");
	})


// slider
	$('.reviews-slader').slick({
		infinite: false,
		slidesToShow: 3,
		dots: true,
		slidesToScroll: 1,
		prevArrow: '<button class="slick-arrow slick-prev"><i class="ic ic--reviews-slader_arrow-prev"></i></button>',
		nextArrow: '<button class="slick-arrow slick-next"><i class="ic ic--reviews-slader_arrow-next"></i></button>'
	});

});






$(window).bind('load', handler);
$(window).bind('resize', handler);




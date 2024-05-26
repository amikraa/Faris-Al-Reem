$(document).ready(function(){

	// Wow Animation JS Start
	new WOW().init(); 
	// Wow Animation JS Start

	// Banner Slider JS Start
	$('.banner-slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 3000,
		autoplay: true,
		autoplaySpeed: 3000,
		dots: true,
		prevArrow: '<button class="slick-arrow prev-arrow"><i class="fa fa-caret-left" aria-hidden="true"></i></button>',
		nextArrow: '<button class="slick-arrow next-arrow"><i class="fa fa-caret-right" aria-hidden="true"></i></button>',
		responsive: [
		{
			breakpoint: 992,
			settings: {
				dots: false,
				arrows: false,
			}
		}]
	});
	// Banner Slider JS End

	// Counter JS Start
	var a = 0;
	$(window).scroll(function() {
		if ($(".main-counter").length) {
			var oTop = $('.main-counter').offset().top - window.innerHeight;
			if (a == 0 && $(window).scrollTop() > oTop) {
				$('.count').each(function() {
					var $this = $(this),
					countTo = $this.attr('data-count');
					$({
						countNum: $this.text()
					}).animate({
						countNum: countTo
					}, {
						duration: 2000,
						easing: 'swing',
						step: function() {
							$this.text(Math.floor(this.countNum));
						},
						complete: function() {
							$this.text(this.countNum);
						}
					});
				});
				a = 1;
			}
		}
	});
	// Counter JS End

	// Work Slider Start
	$('.work-slider').slick({
		dots: true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 3000,
		responsive: [
		{
			breakpoint: 1199,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		]
	});
	// Work Slider End
	

	// Testimonial Slider JS Start
	$('.testimonial-slider').slick({
		dots: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<button class="slick-arrow prev-arrow"><i class="fa fa-long-arrow-left" aria-hidden="true"></i><span>Previous</span></button>',
		nextArrow: '<button class="slick-arrow next-arrow"><span>Next</span><i class="fa fa-long-arrow-right" aria-hidden="true"></i></button>',
		autoplay: true,
		autoplaySpeed: 3000,
		responsive: [
		{
			breakpoint: 1199,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: false
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		]
	});
	// Testimonial Slider JS End


	// Sticky Header JS Start
	$(window).on( 'scroll', function(){
		if ($(window).scrollTop() >= 200) {
			$('.site-header').addClass('sticky-header');
		}
		else {
			$('.site-header').removeClass('sticky-header');
		}
	});
	// Sticky Header JS End

	// Smooth Scrolling JS Start
	$( '.main-navigation ul li a' ).on( 'click', function(e){		
		var href = $(this).attr( 'href' );	  
		$( 'html, body' ).animate({
			scrollTop: $( href ).offset().top
		}, '1000' );
		e.preventDefault();

	});
	// Smooth Scrolling JS End

	// Scroll To Top JS Start
	$(window).on( 'scroll', function() {
		if ($(window).scrollTop() > 300) {
			$("#scroll-to-top").fadeIn('500');
		} else {
			$("#scroll-to-top").fadeOut('500');
		}
	});
		jQuery('#scroll-to-top').click(function() {
	    jQuery("html, body").animate({ scrollTop: 0 }, 600);
	    return false;
	});
	// Scroll To Top JS End

	// Toogle Menu Mobile JS Start
	$(".toggle-button").on( 'click', function(){
		$(".main-navigation").toggleClass('toggle-menu');
	});
	$(".main-navigation ul li a").on( 'click', function(){
		$(".main-navigation").removeClass('toggle-menu');
	});
	// Toogle Menu Mobile JS End

	
	if ($(window).width() < 992) {
	  // Gallery Slider For Mobile JS Start
	  $('.services-slider').slick({
	  	infinite: true,
	  	slidesToShow: 2,
	  	slidesToScroll: 1,
	  	prevArrow: false,
	  	nextArrow: false,
	  	dots: true,
	  	autoplay: true,
	  	autoplaySpeed: 2000,	
	  	responsive: [
	  	{
	  		breakpoint: 768,
	  		settings: {
	  			slidesToShow: 1
	  		}
	  	}
	  	]
	  });
	  // Gallery Slider For Mobile JS End

	  // Team Slider For Mobile JS Start
	  $('.team-slider').slick({
	  	infinite: true,
	  	slidesToShow: 2,
	  	slidesToScroll: 1,
	  	prevArrow: false,
	  	nextArrow: false,
	  	dots: true,
	  	autoplay: true,
	  	autoplaySpeed: 2000,	
	  	responsive: [
	  	{
	  		breakpoint: 768,
	  		settings: {
	  			slidesToShow: 1
	  		}
	  	}
	  	]
	  });
	  // Team Slider For Mobile JS End

	  // Plan Slider For Mobile JS Start
	  $('.plan-slider').slick({
	  	infinite: true,
	  	slidesToShow: 2,
	  	slidesToScroll: 1,
	  	prevArrow: false,
	  	nextArrow: false,
	  	dots: true,
	  	autoplay: true,
	  	autoplaySpeed: 2000,	
	  	responsive: [
	  	{
	  		breakpoint: 768,
	  		settings: {
	  			slidesToShow: 1
	  		}
	  	}
	  	]
	  });
	  // Plan Slider For Mobile JS End
	}


});
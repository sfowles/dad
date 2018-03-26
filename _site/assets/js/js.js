$(document).ready(function(){

	////
	// Main navigation

	let menuCounter = 0;

	// Toggle nav states
	function navToggle () {
		$('.cap').toggleClass('u-cap');
		$('.top, .bot2, .boter2').toggleClass('u-top');
		$('.mid, .top2').toggleClass('u-mid');
		$('.bot, .mid2').toggleClass('u-bot');
		$('.boter').toggleClass('u-boter');
		$('.top, .mid, .bot').toggleClass('menu-animate');
		$('.hamburger').toggleClass('ham opacity');
		//$('.menu').toggleClass('o-menu');
		$('.menu-right').toggleClass('o-menu-right');
		$('.menu-overlay').fadeToggle('slow');
		$('.close').hide();
		$('.nested').removeClass('o-nested');
		$('.sub-nav-container ul').removeClass('opened');
		menuCounter++
		if (menuCounter > 1) {
			$(".menu").toggle("blind", {"direction": "right"}, 500);
			$(".menu-right").toggle("blind", {"direction": "right"}, 500);
			$('.menu-wrapper').removeClass('o-menu-wrapper');
			$('.menu-wrapper').toggleClass('u-menu-wrapper');
			menuCounter = 0;
		} else {
			$(".menu").toggle("blind", {"direction": "left"}, 500);
			$(".menu-right").toggle("blind", {"direction": "left"}, 500);
			$('.menu-wrapper').removeClass('u-menu-wrapper o-nested u-nested');
			$('.menu-wrapper').toggleClass('o-menu-wrapper');
		}
	};

	// Close to default nav state
	function navClose () {
		//$('.menu').removeClass('o-menu');
		$('.menu-right').removeClass('o-menu-right');
		$('.menu-wrapper').removeClass('o-menu-wrapper');
		$('.menu-wrapper').removeClass('u-menu-wrapper');
		menuCounter = 0;
		$(".menu").hide("blind", {"direction": "right"}, 500);
		$(".menu-right").hide("blind", {"direction": "right"}, 500);
		$('.cap').removeClass('u-cap');
		$('.top, .bot2, .boter2').removeClass('u-top');
		$('.mid, .top2').removeClass('u-mid');
		$('.bot, .mid2').removeClass('u-bot');
		$('.boter').removeClass('u-boter');
		$('.top, .mid, .bot').addClass('menu-animate');
		$('.hamburger').removeClass('opacity').addClass('ham');
		$('.menu-overlay').fadeOut('slow');
		$('.close').hide();
		$('.nested').removeClass('o-nested');
		$('.menu-wrapper').removeClass('o-menu-wrapper o-nested u-nested');
		$('.menu-wrapper').addClass('u-menu-wrapper');
		$('.sub-nav-container ul').removeClass('opened');
	}

	// Hamburger icon click state
	$('.hamburger').on('click', function() {
		navToggle();
		collisionCheck($('.hamburger .bot, .ham'), $('.light-container'), 'o-white');
	});

	// Check for DIV collision
	function collisionCheck($div1, $div2, color, topOnly) {
		var hasCollided = false;

		$div2.each(function() {
			var $this = $(this),
				y1 = $div1.offset().top,
				h1 = $div1.outerHeight(true),
				b1 = y1 + h1,
				y2 = $this.offset().top,
				h2 = $this.outerHeight(true),
				b2 = y2 + h2;

			if (b1 >= y2 && y1 <= b2 && !$('.menu').hasClass('o-menu')) {
				hasCollided = true;
			}
			if (topOnly && y1 > y2) {
				hasCollided = true;
			}
		});

		if (hasCollided == true) {
			$div1.addClass(color);
		} else {
			$div1.removeClass(color);
		}
	}

	// Do things on scroll
	$(document).on('scroll', function() {
		navClose();
		collisionCheck($('.hamburger .bot, .ham'), $('.light-container'), 'o-white');
		collisionCheck($('.headline'), $('.headline-pos-anchor'), 'headline-pos-change', true);
		collisionCheck($('.headline'), $('.headline-color-anchor'), 'headline-color-change', true);
	});

	// Do things on overlay click
	$('.menu-overlay').on('click', function() {
		navClose();
		collisionCheck($('.hamburger .bot, .ham'), $('.light-container'), 'o-white');
	});

	// Show nested nav items when a parent is clicked
	$('.nested').on('click', function(e) {
		const nestedId = $(this).data('id');

		e.preventDefault();
		$('.menu-wrapper').toggleClass('o-nested');
		$('.menu-wrapper').removeClass('u-nested');
		$('.sub-nav-container ul').removeClass('u-opened');

		$('.sub-nav-container ul').each(function() {
			if ($(this).data('id') == nestedId) {
				$(this).addClass('opened');
			}
		});
		//$(this).removeClass('o-nested').siblings(':first').slideToggle('fast');
		//if ( $('.topbar')[0] ) {
		//	$('.nested').not(this).removeClass('o-nested').siblings().slideUp('fast');
		//}
	});

	// Back button functionality for sub navigation
	$('.sub-nav-back').on('click', function() {
		$('.sub-nav-container ul').removeClass('opened');
		$('.sub-nav-container ul').addClass('u-opened');
		$('.menu-wrapper, .nested').removeClass('o-nested o-menu-wrapper');
		$('.menu-wrapper').addClass('u-nested');
	});

	// End main navigation
	////

	////
	// Forms

	// Input, textarea, & select active states
	$('input[type=text], textarea, select').focus(function() {
		$(this).parent().find('label').addClass('label-active').closest('fieldset').addClass('fieldset');
	}).blur(function() {
		if(!$(this).val()) {
			$(this).parent().find('label').removeClass('label-active');
		}
		$(this).closest('fieldset').removeClass('fieldset');
	});
	$('input[type=text], textarea, select').on('change', function() { // Make sure it responds to autofill!
		if( $('input[type=text]').val() ) {
			$(this).parent().find('label').addClass('label-active');
		}
	});

	// Programmatically open select when it's label is clicked (screw you Moz)
	function openSelect ($selector){
		var element = $selector[0], worked = false;
		if (document.createEvent) { // all browsers
			var e = document.createEvent("MouseEvents");
			e.initMouseEvent("mousedown", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
			worked = element.dispatchEvent(e);
		} else if (element.fireEvent) { // ie
			worked = element.fireEvent("onmousedown");
		}
	}
	$('.select label, .select .arrow').on('click', function() {
		openSelect($(this).parent().find('select'));
	});

	// End forms
	////

});

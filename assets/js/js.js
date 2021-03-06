$(document).ready(function(){

	////
	// Main navigation

	let menuCounter = 0;

	// Toggle nav states
	function navToggle () {
		$('.top').toggleClass('u-top');
		$('.mid').toggleClass('u-mid');
		$('.bot').toggleClass('u-bot');
		//$('.top, .mid, .bot').toggleClass('menu-animate');
		$('.hamburger').toggleClass('ham opacity');
		//$('.menu').toggleClass('o-menu');
		$('.menu-right').toggleClass('o-menu-right');
		$('.menu-overlay').fadeToggle('slow');
		$('.close').hide();
		$('.nested').removeClass('o-nested');
		$('.sub-nav-container ul').removeClass('opened');
		$('.nav-container').toggleClass('is-open');
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
			$('.menu-wrapper ul').removeClass('ul-blinds ul-blinds-close');
			$('.sub-nav-container ul').removeClass('ul-blinds');
			$('.sub-nav-container ul').addClass('ul-blinds-close');
			$('.menu-right img').removeClass('animate-in');
			$(shuffle($('.menu-right img')).slice(0, 1)).addClass('animate-in');
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
		$('.top').removeClass('u-top');
		$('.mid').removeClass('u-mid');
		$('.bot').removeClass('u-bot');
		//$('.top, .mid, .bot').addClass('menu-animate');
		$('.hamburger').removeClass('opacity').addClass('ham');
		$('.menu-overlay').fadeOut('slow');
		$('.close').hide();
		$('.nested').removeClass('o-nested');
		$('.menu-wrapper').removeClass('o-menu-wrapper o-nested u-nested');
		$('.menu-wrapper').addClass('u-menu-wrapper');
		$('.menu-wrapper ul').removeClass('ul-blinds ul-blinds-close');
		$('.sub-nav-container ul').removeClass('ul-blinds');
		$('.sub-nav-container ul').addClass('ul-blinds-close');
		$('.nav-container').removeClass('is-open');
	}

	// Hamburger icon click state
	$('.hamburger').on('click', function() {
		navToggle();
		collisionCheck($('.hamburger .bot, .ham'), $('.light-container'), $('.light-container'), 'o-white');
	});

	// Do the Fisher-Yates shuffle
	function shuffle(array) {
		var m = array.length, t, i;

		// While there remain elements to shuffle…
		while (m) {

			// Pick a remaining element…
			i = Math.floor(Math.random() * m--);

			// And swap it with the current element.
			t = array[m];
			array[m] = array[i];
			array[i] = t;
		}

		return array;
	}

	// Check for DIV collision
	function collisionCheck($div1, $div2, $div3, color, topOnly, reverse) {
		var hasCollided = false;

		$div1.each(function() {
			var $this = $(this),
				y1 = $div2.offset().top,
				h1 = $div2.outerHeight(true),
				b1 = y1 + h1,
				y2 = $this.offset().top,
				h2 = $this.outerHeight(true),
				b2 = y2 + h2;

			if (b1 >= y2 && y1 <= b2) {
				hasCollided = true;
			}
			if (topOnly && y1 > y2) {
				hasCollided = true;
			}

			if (reverse == true) {
				if (hasCollided == true) {
					$div3.removeClass(color);
					hasCollided = false;
				} else {
					$div3.addClass(color);
				}
			} else {
				if (hasCollided == true) {
					$this.addClass(color);
					hasCollided = false;
				} else {
					$this.removeClass(color);
				}
			}
		});
	}

	// Do things on scroll
	$(document).on('scroll', function() {
		navClose();
		collisionCheck($('.hamburger .bot, .ham'), $('.light-container'), $('.light-container'), 'o-white');
		collisionCheck($('.headline'), $('.headline-pos-anchor'), $('.headline-pos-anchor'), 'headline-pos-change', true);
		collisionCheck($('.headline'), $('.headline-color-anchor'), $('.headline-color-anchor'), 'headline-color-change', true);

		collisionCheck($('.gallery-item'), $('.gallery-heading'), $('.gallery-heading'), 'gallery-active');
		collisionCheck($('.intro'), $('.phantom-logo'), $('.nav-container, .logo'), 'is-fixed', false, true);
	});

	// Do things on overlay click
	$('.menu-overlay').on('click', function() {
		navClose();
		collisionCheck($('.hamburger .bot, .ham'), $('.light-container'), $('.light-container'), 'o-white');
	});

	// Show nested nav items when a parent is clicked
	$('.nested').on('click', function(e) {
		const nestedId = $(this).data('id');

		e.preventDefault();
		$('.sub-nav-container ul').removeClass('ul-blinds-close');
		$('.menu-wrapper ul').removeClass('ul-blinds');
		$('.menu-wrapper ul').addClass('ul-blinds-close');

		$('.sub-nav-container ul').each(function() {
			if ($(this).data('id') == nestedId) {
				$(this).addClass('ul-blinds');
			}
		});
	});

	// Show different navigation images on hover
	$('.menu-item').on('mouseover', function() {
		const nestedId = $(this).data('id');

		$('.menu-right img').removeClass('animate-in');
		$('.menu-right img').each(function() {
			if ($(this).data('id') == nestedId) {
				$(this).addClass('animate-in');
			}
		});
	});

	// Back button functionality for sub navigation
	$('.sub-nav-back').on('click', function() {
		$('.sub-nav-container ul').addClass('ul-blinds-close');
		$('.menu-wrapper ul').addClass('ul-blinds');
		$('.sub-nav-container ul').removeClass('ul-blinds');
		$('.menu-wrapper ul').removeClass('ul-blinds-close');
		$('.menu-wrapper, .nested').removeClass('o-nested o-menu-wrapper');
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

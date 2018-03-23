$(document).ready(function(){

	////
	// Main navigation

	// Toggle nav states
	function navToggle () {
		$('.top').toggleClass('u-top');
		$('.mid').toggleClass('u-mid');
		$('.bot').toggleClass('u-bot');
		$('.hamburger').toggleClass('ham opacity');
		$('.menu').toggleClass('o-menu');
		$('.menu-overlay').fadeToggle('fast');
		$('.close').hide();
		$('.nested').removeClass('o-nested').siblings().slideUp('fast');
	};

	// Close to default nav state
	function navClose () {
		$('.menu').removeClass('o-menu');
		$('.top').removeClass('u-top');
		$('.mid').removeClass('u-mid');
		$('.bot').removeClass('u-bot');
		$('.hamburger').removeClass('opacity').addClass('ham');
		$('.menu-overlay').fadeOut('fast');
		$('.close').hide();
		$('.nested').removeClass('o-nested').siblings().slideUp('fast');
	}

	// Hamburger icon click state
	$('.hamburger').on('click', function() {
		navToggle();
		collisionCheck($('.hamburger span, .ham'), $('.light-container'), 'o-white');
	});

	// If menu is open, show close tooltip on hamburger hover
	$('.hamburger').hover(function() {
		if ($('.menu').hasClass('o-menu')) {
			$('.close').fadeIn('fast');
		}
	}, function() {
		$('.close').fadeOut('fast');
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
		collisionCheck($('.hamburger span, .ham'), $('.light-container'), 'o-white');
		collisionCheck($('.headline'), $('.headline-pos-anchor'), 'headline-pos-change', true);
		collisionCheck($('.headline'), $('.headline-color-anchor'), 'headline-color-change', true);
	});

	// Do things on overlay click
	$('.menu-overlay').on('click', function() {
		navClose();
		collisionCheck($('.hamburger span, .ham'), $('.light-container'), 'o-white');
	});

	// Show nested nav items when a parent is clicked
	$('.nested').on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('o-nested').siblings(':first').slideToggle('fast');
		if ( $('.topbar')[0] ) {
			$('.nested').not(this).removeClass('o-nested').siblings().slideUp('fast');
		}
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

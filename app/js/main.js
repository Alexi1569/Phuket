;
jQuery(document).ready(function($) {
	var w = $(window).outerWidth();

	$(window).resize(function() {
		w = $(window).outerWidth();
		rentPageFooter();
	});

	$('#js-header-search-toggle').click(function(e) {
		if (w > 480) {
			if ($('.header__search').hasClass('active')) {

			} else {
				e.preventDefault();
				$('.header__search').addClass('active');
			}
		}
		
	});

	if ($('#js-select-day').length) {
		$('#js-select-day').SumoSelect({});
	}

	if ($('#js-select-time').length) {
		$('#js-select-time').SumoSelect({});
	}

	if ($('#js-select-status').length) {
		$('#js-select-status').SumoSelect({});
	}

	if ($('#js-select-type').length) {
		$('#js-select-type').SumoSelect({});
	}

	if ($('#js-select-room').length) {
		$('#js-select-room').SumoSelect({});
	}

	if ($('#js-select-beach').length) {
		$('#js-select-beach').SumoSelect({});
	}

	if ($('#js-select-sort-quantity').length) {
		$('#js-select-sort-quantity').SumoSelect({});
	}

	if ($('#js-select-sort-price').length) {
		$('#js-select-sort-price').SumoSelect({});
	}

	if ($('#js-select-date').length) {
		$('#js-select-date').daterangepicker({
			opens: 'center',
		});
	}

	if ($('.rent').length) {
		function rentPageFooter() {
			var height = $('.rent').find('.footer').outerHeight() + 60;

			$('.rent').css({
				'padding-bottom': height + 'px',
			})
		}

		rentPageFooter();
	}

	if (w > 1050) {
		$('.js-header-select').hover(function() {
			$(this).addClass('active');
		}, function() {
			$(this).removeClass('active');
		});
	}

	$('.js-header-select').click(function() {
		$(this).toggleClass('active');
	});

	if ($('#js-complexes-slider').length) {
		$('#js-complexes-slider').slick({
			appendArrows: '.complexes__controls',
			slidesToShow: 3,
			slidesToScroll: 3,
			prevArrow: '<button class="arrow arrow--prev"></button>',
			nextArrow: '<button class="arrow arrow--next"></button>',
			responsive: [
				{
					breakpoint: 800,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
					}
				},
				{
					breakpoint: 450,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
				}
			]
		});
	}

	if ($('#js-articles-slider').length) {
		$('#js-articles-slider').slick({
			appendArrows: '.articles__controls',
			slidesToShow: 4,
			slidesToScroll: 4,
			prevArrow: '<button class="arrow arrow--prev"></button>',
			nextArrow: '<button class="arrow arrow--next"></button>',
			responsive: [
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
					}
				},
				{
					breakpoint: 500,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
					}
				},
				{
					breakpoint: 400,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
				}
			]
		});
	}

	if ($('#js-reviews-slider').length) {
		$('#js-reviews-slider').slick({
			appendDots: '.reviews__controls',
			dotsClass: 'reviews__controls-dots',
			arrows: false,
			dots: true
		});
	}

	$('#js-mobile-menu-toggle').click(function() {
		$('.header__mobile').toggleClass('active');
		$(this).toggleClass('active');
	});

	if ($('.header__mobile').length) {
		$('.header__mobile').find('.header__mobile-item svg').click(function() {
			$(this).closest('.header__nav-include').find('.header__mobile-list--inner').toggleClass('active');
		});
	};

	if (w > 1050) {
		$('.offers__item').hover(function() {
			var img = $(this).find('img');
			var imgHeight = $(img).height();
			var selfHeight = $(this).outerHeight();
			var imgContainer = $(this).find('.offers__item-img');
			var imgContainerHeight = $(imgContainer).outerHeight();
			var offset = selfHeight / 6 / 16;
			var resultHeight = imgContainerHeight - offset * 16;

			img.css({
				'transform': 'translateY(-'+ offset +'rem)',
			});

			imgContainer.css({
				'height': resultHeight,
			})
		}, function() {
			var img = $(this).find('img');
			var imgContainer = $(this).find('.offers__item-img');

			img.css({
				'transform': 'translateY(0)',
			});

			imgContainer.css({
				'height': 'auto',
			})
		})
	}

});
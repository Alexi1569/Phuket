;
jQuery(document).ready(function($) {
	var w = $(window).outerWidth();

	function rentPageFooter() {
		var height = $('.rent').find('.footer').outerHeight() + 60;

		$('.rent').css({
			'padding-bottom': height + 'px',
		})
	}

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
		$('#js-select-day').SumoSelect({
			floatWidth: 250,
		});
	}

	if ($('#js-product-slider').length) {

		var $productsSlider = $('#js-product-slider');

		$productsSlider.slick({
			slidesToShow: 1,
		  centerMode: true,
		  cssEase: 'ease-in-out',
		  centerPadding: '0px',
		  speed: 450,
		  appendArrows: '.product__controls',
		  prevArrow: '<button class="arrow arrow-gallery arrow--prev-gallery"></button>',
		  nextArrow: '<button class="arrow arrow-gallery arrow--next-gallery"></button>',
		  asNavFor: '#js-product-previews',
		});

		$('#js-product-previews').slick({
			slidesToShow: 2,
		  centerMode: true,
		  variableWidth: true,
		  speed: 450,
		  cssEase: 'ease-in-out',
		  centerPadding: '0px',
		  arrows: false,
		});

	}

	if ($('.news-page').length) {

		function addToggleBtn() {
			$('.articles__slide-text').each(function() {
				var pArray = $(this).find('p');

				if (pArray.length > 2) {
					var btn = document.createElement('span');
					btn.className = 'articles__slide-see js-article-see';
					btn.innerHTML = '(see all<svg version="1.1" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 42.1 86" style="enable-background:new 0 0 42.1 86;" xml:space="preserve"><g transform="translate(0,-952.36218)"><path d="M0,995.5c0,0.7,0.3,1.3,0.8,1.8l36,40c1.1,1.3,3,1.4,4.2,0.4c1.3-1.1,1.4-3,0.4-4.2l-0.1-0.1l-34.2-38l34.2-38 c1.1-1.2,1.1-3.1-0.1-4.2c-1.2-1.1-3.1-1.1-4.2,0.1l-0.1,0.1l-36,40C0.2,994-0.1,994.7,0,995.5z" fill="#999999"/></g></svg>)';

					$(this)[0].append(btn);
				}
			})
		}

		addToggleBtn();

		function initBlockArticles() {
			$('.articles__slide-text').each(function() {
				$(this).find('p').each(function() {
					if ($(this).index() === 0) {
						$(this).addClass('articles__slide-text--block');
					}
					if ($(this).index() === 1) {
						$(this).addClass('articles__slide-text--inline');
					}
				})
			})
		}

		initBlockArticles();

		$('.js-article-see').click(function() {
			var btn = $(this);
			var articlesText = $(this).closest('.articles__slide-text');
			var pArray = $(articlesText).find('p');

			if ($(articlesText).hasClass('active')) {
				$(pArray).each(function() {
					if ($(this).index() !== 0) {
						$(this).removeClass('articles__slide-text--block');
						$(this).removeClass('articles__slide-text--inline');
					}  

					if ($(this).index() === 1) {
						$(this).addClass('articles__slide-text--inline');
					}
				})

				$(btn).html(function() {
					return '(see all<svg version="1.1" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 42.1 86" style="enable-background:new 0 0 42.1 86;" xml:space="preserve"><g transform="translate(0,-952.36218)"><path d="M0,995.5c0,0.7,0.3,1.3,0.8,1.8l36,40c1.1,1.3,3,1.4,4.2,0.4c1.3-1.1,1.4-3,0.4-4.2l-0.1-0.1l-34.2-38l34.2-38 c1.1-1.2,1.1-3.1-0.1-4.2c-1.2-1.1-3.1-1.1-4.2,0.1l-0.1,0.1l-36,40C0.2,994-0.1,994.7,0,995.5z" fill="#999999"></path></g></svg>)';
				});
				$(btn).removeClass('opened');

				$(articlesText).removeClass('active')
			} else {
				$(pArray).each(function() {
					if ($(this).index() !== pArray.length - 1) {
						$(this).addClass('articles__slide-text--block');
					} else {
						$(this).addClass('articles__slide-text--inline');
					}
				})

				$(btn).html(function() {
					return '(hide<svg version="1.1" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 42.1 86" style="enable-background:new 0 0 42.1 86;" xml:space="preserve"><g transform="translate(0,-952.36218)"><path d="M0,995.5c0,0.7,0.3,1.3,0.8,1.8l36,40c1.1,1.3,3,1.4,4.2,0.4c1.3-1.1,1.4-3,0.4-4.2l-0.1-0.1l-34.2-38l34.2-38 c1.1-1.2,1.1-3.1-0.1-4.2c-1.2-1.1-3.1-1.1-4.2,0.1l-0.1,0.1l-36,40C0.2,994-0.1,994.7,0,995.5z" fill="#999999"></path></g></svg>)';
				});
				$(btn).addClass('opened');

				$(articlesText).addClass('active')
			}

			
		});
	}

	$('.styled-select').SumoSelect({
		floatWidth: 250,
	})

	if ($('#js-select-date').length) {
		$('#js-select-date').daterangepicker({
			opens: 'center',
			startDate: moment(),
			endDate: moment().add(5, 'days'),
			locale: {
				format: 'DD-MM-YYYY',
			}
		});
	}

	if ($('#js-select-date-rent').length) {

		var dates = [
			{
				bookStart: moment().add(1, 'days'),
				bookEnd: moment().add(2, 'days')
			},
			{
				bookStart: moment().add(4, 'days'),
				bookEnd: moment().add(5, 'days')
			}
		];


		var bookEnd = moment().add(2, 'days');


		var $calendar = $('#js-select-date-rent');
		$calendar.daterangepicker({
			singleDatePicker: true,
			parentEl: '.product__calendar',
			isInvalidDate: function(date) {
				for (var i = 0; i < dates.length; i++) {

					if (date.format('DD-MM-YYYY') == dates[i].bookStart.format('DD-MM-YYYY')) {
						return true;
					} else if (date.format('DD-MM-YYYY') == dates[i].bookEnd.format('DD-MM-YYYY')) {
						return true;
					} else if (date.isAfter(dates[i].bookStart) && date.isBefore(dates[i].bookEnd)) {
						return true;
					}
				}
			}
		});

		$calendar.trigger('click');
		$calendar.css({
			'opacity': '0',
			'position': 'absolute',
		});

	}

	if ($('.rent').length) {

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
		$('html').toggleClass('no-scroll');
		$('body').toggleClass('no-scroll');
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
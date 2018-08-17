;
jQuery(document).ready(function ($) {

    if ("ontouchstart" in document.documentElement) {
        $('body').addClass('touch-device');
    } else {
        $('body').removeClass('touch-device');
    }

    var w = $(window).outerWidth();

    if ($('#comments-rating').length) {
        var parent = $('#comments-rating').closest('#commentform');
        var rating = $('#comments-rating').remove();

        $(parent).find('.product__reviews-add-rating').append(rating);
    }

    if ($('#video').length) {
        var video = document.getElementById('video');
        setTimeout(function() {
            video.play();
            video.mute = true;
        }, 500);

        $('#js-video-mute').click(function(e) {
            e.preventDefault();

            if (video.mute) {
                video.volume = 1;
                video.mute = false;
                $(this).addClass('unmutted');
            } else {
                video.volume = 0;
                video.mute = true;
                $(this).removeClass('unmutted');
            }
        })
    }
    setTimeout(function() {
        $('#mobile-menu').css({
            'opacity': 1,
            'height': 'auto',
            'overflow': 'visible',
        })
    }, 1000);



    $(document).click(function(e) {
        if ((!$(e.target.closest('.header__search')).is('.header__search')) && $('.header__search').hasClass('active')) {
            $('.header__search').removeClass('active');
        }
    })

    if ($('.offers__item').length) {
        function setEqualHeightToOfferItems() {
            var max = 0;

            if (w > 991) {
                $('.offers__item').each(function() {
                    var h = $(this).outerHeight();

                    if (h > max) {
                        max = h;
                    }
                });

                $('.offers__item').each(function() {
                    $(this).css({
                        'height': max + 'px',
                    })
                });
            }


        }

        setTimeout(function() {
            setEqualHeightToOfferItems();
        }, 500)
        $(window).resize(function() {
            setEqualHeightToOfferItems();
        })
    }

    function rentPageFooter() {
        var height = $('.rent').find('.footer').outerHeight() + 60;

        $('.rent').find('#page').css({
            'padding-bottom': height + 'px',
        })
    }

    if ($('#mobile-menu').length) {
        $('#mobile-menu').mmenu({
            navbars: {
                content : [ "close" ],
            },
        })
    }

    $(window).resize(function () {
        w = $(window).outerWidth();
        rentPageFooter();
    });

    $('#js-header-search-toggle').click(function (e) {
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
            nativeOnDevice: ['Android', 'BlackBerry', 'iPhone', 'iPad', 'iPod', 'Opera Mini', 'IEMobile', 'Silk'],
        });
    }

    if ($('#js-product-slider').length) {

        var $productsSlider = $('#js-product-slider');

        $productsSlider.on('init', function(event, slick) {
            $('.product__gallery').addClass('active');
        });

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
            $('.articles__slide-text').each(function () {
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
            $('.articles__slide-text').each(function () {
                $(this).find('p').each(function () {
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

        $('.js-article-see').click(function () {
            var btn = $(this);
            var articlesText = $(this).closest('.articles__slide-text');
            var pArray = $(articlesText).find('p');

            if ($(articlesText).hasClass('active')) {
                $(pArray).each(function () {
                    if ($(this).index() !== 0) {
                        $(this).removeClass('articles__slide-text--block');
                        $(this).removeClass('articles__slide-text--inline');
                    }

                    if ($(this).index() === 1) {
                        $(this).addClass('articles__slide-text--inline');
                    }
                })

                $(btn).html(function () {
                    return '(see all<svg version="1.1" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 42.1 86" style="enable-background:new 0 0 42.1 86;" xml:space="preserve"><g transform="translate(0,-952.36218)"><path d="M0,995.5c0,0.7,0.3,1.3,0.8,1.8l36,40c1.1,1.3,3,1.4,4.2,0.4c1.3-1.1,1.4-3,0.4-4.2l-0.1-0.1l-34.2-38l34.2-38 c1.1-1.2,1.1-3.1-0.1-4.2c-1.2-1.1-3.1-1.1-4.2,0.1l-0.1,0.1l-36,40C0.2,994-0.1,994.7,0,995.5z" fill="#999999"></path></g></svg>)';
                });
                $(btn).removeClass('opened');

                $(articlesText).removeClass('active')
            } else {
                $(pArray).each(function () {
                    if ($(this).index() !== pArray.length - 1) {
                        $(this).addClass('articles__slide-text--block');
                    } else {
                        $(this).addClass('articles__slide-text--inline');
                    }
                })

                $(btn).html(function () {
                    return '(hide<svg version="1.1" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 42.1 86" style="enable-background:new 0 0 42.1 86;" xml:space="preserve"><g transform="translate(0,-952.36218)"><path d="M0,995.5c0,0.7,0.3,1.3,0.8,1.8l36,40c1.1,1.3,3,1.4,4.2,0.4c1.3-1.1,1.4-3,0.4-4.2l-0.1-0.1l-34.2-38l34.2-38 c1.1-1.2,1.1-3.1-0.1-4.2c-1.2-1.1-3.1-1.1-4.2,0.1l-0.1,0.1l-36,40C0.2,994-0.1,994.7,0,995.5z" fill="#999999"></path></g></svg>)';
                });
                $(btn).addClass('opened');

                $(articlesText).addClass('active')
            }


        });
    }

    $('.styled-select').SumoSelect({
        floatWidth: 250,
        nativeOnDevice: ['Android', 'BlackBerry', 'iPhone', 'iPad', 'iPod', 'Opera Mini', 'IEMobile', 'Silk'],
    })

    if ($('#js-select-date').length) {
        if (typeof calendar !== 'undefined' && calendar !== 'false' ) {
            var myCalendar = JSON.parse(calendar);

            var dates = [];
            myCalendar.forEach(function (element, i) {
                dates[i] = {
                    bookStart: moment.parseZone(element['start']),
                    bookEnd: moment.parseZone(element['finish'])
                };
            });

            $('#js-select-date').daterangepicker({
                opens: 'left',
                startDate: moment(),
                endDate: moment().add(5, 'days'),
                locale: {
                    format: 'DD-MM-YYYY',
                },
                isInvalidDate: function (date) {
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
        } else {
            $('#js-select-date').daterangepicker({
                opens: 'left',
                startDate: moment(),
                endDate: moment().add(5, 'days'),
                locale: {
                    format: 'DD-MM-YYYY',
                }
            });
        }

    }


    if ($('#js-select-date-rent').length) {

        if (typeof calendar !== 'undefined' && calendar !== 'false' ) {

            var myCalendar = JSON.parse(calendar);

            var dates = [];
            myCalendar.forEach(function (element, i) {
                dates[i] = {
                    bookStart: moment.parseZone(element['start']),
                    bookEnd: moment.parseZone(element['finish'])
                };
            });


            var $calendar = $('#js-select-date-rent');
            $calendar.daterangepicker({
                singleDatePicker: true,
                parentEl: '.product__calendar',
                isInvalidDate: function (date) {
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

        } else {
            var $calendar = $('#js-select-date-rent');
            $calendar.daterangepicker({
                singleDatePicker: true,
                parentEl: '.product__calendar',
            });

            $calendar.trigger('click');
            $calendar.css({
                'opacity': '0',
                'position': 'absolute',
            });
        }

    }

    if ($('.rent').length) {

        rentPageFooter();
    }

    if (w > 1050) {
        $('.js-header-select').hover(function () {
            $(this).addClass('active');
        }, function () {
            $(this).removeClass('active');
        });
    }

    $('.js-header-select').click(function () {
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
});
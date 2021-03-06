$(function () {

    $(".header_slider").slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrows slider-arrows-left" src="img/arrows-left.svg" alt="">',
        nextArrow: '<img class="slider-arrows slider-arrows-right" src="img/arrows-right.svg" alt="">',
        asNavFor: '.slider-dotshead',
    })
    $(".slider-dotshead").slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '.header_slider',
    })

    $(".surf-slider").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<img class="slider-arrows slider-arrows-left" src="img/arrows-left.svg" alt="">',
        nextArrow: '<img class="slider-arrows slider-arrows-right" src="img/arrows-right.svg" alt="">',
        asNavFor: '.slider-map',
        responsive: [{
                breakpoint: 1210,
                settings: {
                    slidesToShow: 3,


                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,

                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,

                }
            },


        ]


    });

    $(".slider-map").slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.surf-slider',
        focusOnSelect: true,


    })
    $(".travel_slider").slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrows slider-arrows-left" src="img/arrows-left.svg" alt="">',
        nextArrow: '<img class="slider-arrows slider-arrows-right" src="img/arrows-right.svg" alt="">',
    });


    $('<div class="quantity-nav"><div class="quantity-button quantity-up"><img class="distance "src="img/plus.svg " alt=""></div> <div class="quantity-button quantity-down"><img src="img/minus.svg " alt=""></div></div>').insertAfter('.quantity input');
    $('.quantity').each(function () {
        var spinner = $(this),
            input = spinner.find('input[type="number"]'),
            btnUp = spinner.find('.quantity-up'),
            btnDown = spinner.find('.quantity-down'),
            min = input.attr('min'),
            max = input.attr('max');

        btnUp.click(function () {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

        btnDown.click(function () {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

    });

    $(".menu-btn").on("click", function () {
        $(".menu").toggleClass("active");
    });


    $(".quantity-button").on("click", function () {

        let summ = $(".night").val() * $(".summ ").data("night") + ($(".guests").val() - 1) * $(".summ ").data("guests");
        $(".summ").html("$" + summ)

    })


    let summ = $(".night").val() * $(".summ ").data("night") + ($(".guests").val() - 1) * $(".summ ").data("guests");
    $(".summ").html("$" + summ)


    new WOW().init();
});
$(window).scroll(function () {
    var scrlTop = $(window).scrollTop();
    switch (true) {
        case (scrlTop >= 500 && scrlTop <= 1000):
            $('.learningsCards').slideDown().css({
                display: 'flex'
            })
            $('#learningsSection .title').slideDown().css({
                display: 'flex',
                flexDirection: 'column'
            })
            break;
        case (scrlTop >= 1100 && scrlTop <= 1200):
            $('#aboutUsSection .imgAbouts :nth-child(1)').slideDown().css({
            })
            $('#aboutUsSection .aboutUs').slideDown().css({
                display: 'flex',
            })
            break;
        case (scrlTop >= 1400 && scrlTop <= 1500):
            $('#aboutUsSection .imgAbouts :nth-child(2)').slideDown().css({
            })
            break;
        case (scrlTop >= 1600 && scrlTop <= 1700):
            $('#companySection .title').animate({
                opacity: 1,
            }).css({
            })
            break;
        case (scrlTop >= 2000 && scrlTop <= 2200):
            $('#companySection .brands img').animate({
                opacity: 1,
            }).css({
            })
            break;
        case (scrlTop >= 2200 && scrlTop <= 2400):
            $('#testimonialSection .card .title').animate({
                opacity: 1,
            }).css({
            })
            break;
        case (scrlTop >= 2400 && scrlTop <= 2600):
            $('#testimonialSection .card .monCards').animate({
                opacity: 1,
            }).css({
            })
            break;
        case (scrlTop >= 3000 && scrlTop <= 3200):
            $('#startSection .card .title, #startSection .card .startSectionBtns').animate({
                opacity: 1,
            }).css({
            })
            break;
    }
})
$(document).ready(function () {
    var scrlTop = $(window).scrollTop();
  
    if (scrlTop >= 1400) {
        $('#companySection .title, #companySection .brands img, #testimonialSection .card .title, #testimonialSection .card .monCards, #startSection .card .title, #startSection .card .startSectionBtns').animate({
            opacity: 1
        })
        $('.learningsCards').slideDown().css({
            display: 'flex'
        })
        $('#learningsSection .title').slideDown().css({
            display: 'flex',
            flexDirection: 'column'
        })
        $('#aboutUsSection .imgAbouts :nth-child(1)').slideDown().css({
        })
        $('#aboutUsSection .aboutUs').slideDown().css({
            display: 'flex',
        })
        $('#aboutUsSection .imgAbouts :nth-child(2)').slideDown().css({
        })
    }
})
$(window).resize(function () {
    if ((window).matchMedia('(min-width: 1350px)').matches) {

        $('#burger').slideUp(200, function () {
            $('.navbarBtn').slideDown()
        })
        $('#heroSection .card').css({
            marginTop: 105,
            flexDirection: 'row',
            minHeight: 620,
            display: 'flex',
            paddingLeft: 81,
            paddingRight: 81,
            justifyContent: 'space-between',
           alignItems:'flex-start',

        })
        $('#heroSection .card .heroImg  ').css({
            display: 'block',
        })
        $('.heroImgSmall img').css({
            display: 'none',

        })
        console.log(1);
    }
    else if ((window).matchMedia('(min-width: 1200px)').matches) {
        $('.navbarBtn').slideUp(200, function () {
            $('#burger').slideDown(200)
        })
        $('#heroSection .card').css({
            alignItems: 'center',
            flexDirection: 'column-reverse',
            marginTop: 20,
            maxHeight: 1100,
        })

        $('#heroSection .card .heroImg  ').css({
            display: 'none',
        })
        $('.heroImgSmall img').css({
            display: 'flex',
            maxHeight: 600,
            maxWidth: 620
        })


        console.log(2);
    } else if ((window).matchMedia('(min-width: 900px)').matches) {

        $('.loginBar').slideDown(200).css({
            display: 'flex',
        })
        $('#burgerMenuSmall').slideUp(200, function () {
            $('#burger').slideDown(200)
        })
        $('#heroSection .card').css({
            alignItems: 'center',
            flexDirection: 'column-reverse',
            marginTop: 20,
            maxHeight: 1100,
        })

        $('#heroSection .card .heroImg  ').css({
            display: 'none',
        })
        $('.heroImgSmall img').css({
            display: 'flex',
            maxHeight: 600,
            maxWidth: 620
        })
        $('#heroSection .card .title').css({
            scale: '1',
            marginTop: 20,
        })
        console.log(3);
    }
    else if ((window).matchMedia('(min-width: 780px)').matches) {
        $('#burger').slideUp(200, function () {
            $('#burgerMenuSmall').slideDown(200).css({
                display: 'flex',
            })
        })
        $('.loginBar').slideUp(200)
        $('#heroSection .card').css({
            alignItems: 'center',
            flexDirection: 'column-reverse',
            justifyContent: 'flex-end',
            marginTop: 20,
            minHeight: 620,
        })

        $('#heroSection .card .heroImg  ').css({
            display: 'none',
        })
        $('.heroImgSmall img').css({
            display: 'flex',
            maxHeight: 300,
            maxWidth: 320
        })
        $('#heroSection .card .title').css({
            scale: '0.5',
            marginTop: -105,
        })
        console.log(4);
    }
})
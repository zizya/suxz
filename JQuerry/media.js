$(window).resize(function () {
    if ((window).matchMedia('(min-width: 1350px)').matches) {

        $('#burger').slideUp(200, function () {
            $('.navbarBtn').slideDown()
        })
        console.log(1);
    }
    else if ((window).matchMedia('(min-width: 1200px)').matches) {
        $('.navbarBtn').slideUp(200, function () {
            $('#burger').slideDown(200)
        })

        console.log(2);
    } else if ((window).matchMedia('(min-width: 900px)').matches) {

        $('.loginBar').slideDown(200).css({
            display: 'flex',
        })
        $('#burgerMenuSmall').slideUp(200, function () {
            $('#burger').slideDown(200)
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

        console.log(4);
    }
})
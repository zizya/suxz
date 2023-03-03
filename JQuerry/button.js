$('button').css({
    backgroundColor: 'white',
    border: 'none',
    borderRadius: 10,

}).on('mouseover',
    function () {
        if ($(this).css('backgroundColor') == 'rgb(255, 255, 255)') {
            $(this).css({
                backgroundColor: '#8C82FC',
                opacity: 0.2,
                color: 'white'
            }).animate({
                opacity: 1
            },)
        } else if ($(this).css('backgroundColor') == 'rgb(140, 130, 252)') {
            $(this).css({
                color: 'yellow',
                opacity: 0.2,
            }).animate({
                opacity: 1
            },)

        }else if ($(this).hasClass('vanished')) {
            $(this).css({
                color: 'black',
                backgroundColor: '#82fcbf',
                opacity: 0.2,
            }).animate({
                opacity: 1
            },)

        }
    }).on('mouseout',
        function () {
            if ($(this).hasClass('colored')) {
                $(this).css({
                    color: 'white',
                    opacity: 0.2,
                }).animate({
                    opacity: 1
                },)
            } else if ($(this).hasClass('vanished')) {
                $(this).css({
                    backgroundColor: '#F7F7FD',
                    color: '#A2B3BF',
                    opacity: 0.2,
                }).animate({
                    opacity: 1
                },)
            }
            else {
                $(this).css({
                    backgroundColor: 'white',
                    borderRadius: 10,
                    opacity: 0.2,
                    color: 'black'
                }).animate({
                    opacity: 1
                },)
            }

        }
    )
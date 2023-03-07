$('#heroSection .card').css({
    display: 'flex',
    paddingLeft: 81,
    paddingRight: 81,
    justifyContent: 'space-between',
    minHeight: 620,
    
})
$('#heroSection .card .title').css({
    width: 550,
})
$('#heroSection .card .title :nth-child(1)').css({
    marginTop: 0,
    marginBottom: 0,
    fontWeight: 700,
    fontSize: 20,
    color: '#8C82FC',

})
$('#heroSection .card .title :nth-child(2)').css({
    marginTop: 0,
    marginBottom: 0,
    width: 440,
    fontWeight: 800,
    fontSize: 64,
    color: '#22293E',
})
$('#heroSection .card .title :nth-child(3)').css({
    marginTop: 26,
    width: 530,
    fontWeight: 500,
    fontSize: 24,
    color: '#222831',
})
$('#heroSection .card .title button:first').css({
    marginTop: 40,
    width: 240,
    height: 70,
    fontWeight: 700,
    fontSize: 23,
    color: 'white',
    backgroundColor: '#8C82FC'

})
$('#heroSection .card .title button:last').css({
    marginLeft: 40,
    marginTop: 40,
    width: 240,
    height: 70,
    fontWeight: 700,
    fontSize: 23,
    color: '#A2B3BF',
    backgroundColor: '#F7F7FD'

})
$('#heroSection .card .heroImg ').css({


    width: 660,

    height: 616,

})
$('#heroSection .card .heroImg img').css({
    position: 'relative',
    opacity: 0
})
$('#heroSection .card .heroImg :nth-child(1)').css({
    left: 130,
    top: 50
})
$('#heroSection .card .heroImg :nth-child(2)').css({
    left: 100,
    top: -412
})
$('#heroSection .card .heroImg :nth-child(3)').css({
    left: -10,
    top: -1000
})
$('#heroSection .card .heroImg :nth-child(4)').css({
    left: 144,
    top: -1320
})

$(document).ready(function () {
    $('#heroSection .card .heroImg :nth-child(1)').animate({
        opacity: 1
    })
    $('#heroSection .card .heroImg :nth-child(2)').animate({
        opacity: 1
    }, function () {
        $('#heroSection .card .heroImg :nth-child(4)').animate({
            opacity: 1
        }, 'slow', function () {
            $('#heroSection .card .heroImg :nth-child(3)').animate({
                opacity: 1
            })
        })
    })

})

function global() {
    console.log(1);
}
// Media
$('.heroImgSmall img').css({
    display: 'none'
})
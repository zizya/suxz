$('#navbar').css({
    display: 'flex',
    justifyContent: 'space-between',
    paddingLeft: 81,
    paddingRight: 81,


})
$('.logo').css({
    display: 'flex',
    height: 52
})
$('.logo button').css({
    fontWeight: 700,
    fontSize: 34
})
$('.navbarBtn').css({
    display: 'flex',
    marginLeft: -200,
    justifyContent: 'space-between',
    width: 470,
    height: 52
})
$('.navbarBtn button, #burger, #burgerMenuSmall button').css({
    fontWeight: 600,
    fontSize: 20
})
$('.loginBar').css({
    display: 'flex',
    justifyContent: 'space-between',
    width: 300,
    height: 52
})
$('.loginBar button:last').css({
    backgroundColor: '#8C82FC',
    borderRadius: 10,
    height: 52,
    width: 140,
    fontWeight: 600,
    fontSize: 20,
    color: 'white',
})
$('.loginBar button:first').css({
    fontWeight: 600,
    width: 140,
    fontSize: 20,
    color: '#8C82FC',
})

// media
$('#burger').css({
    display: 'none',
    position: 'relative',
    left: 20,
    width: 'auto',
    border: 'none',

})
$('#burger option').css({
    border: 'none',
    fontFamily: 'manrope',
    fontWeight: 600,
    fontSize: 20
})
$('#burgerMenuSmall').css({
    display: "none",
    flexDirection: 'column',
    alignItems: 'center',
    height: 200
})
$('#burgerMenuSmall button').css({
    display: "none",
})
$('#burgerMenuSmall img').css({
    width: 40,
    height: 49
}).click(function () {
    $('#burgerMenuSmall button').toggle('swing')
})
$('#startSection .card').css({
    marginTop: 80,
    paddingLeft: 83,
    paddingRight: 83,
    height: 382,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    backgroundImage: 'url("/src/bg.png")'
})
$('#startSection .card .title').css({
    opacity: 0,
    color: 'white',
    height: 160,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

})
$('#startSection .card .title :nth-child(1)').css({
    margin: 0,
    fontSize: 44,
    fontWeight: 800,
})
$('#startSection .card .title :nth-child(2)').css({
    marginTop: 8,
    fontSize: 24,
    fontWeight: 500,
})


$('#startSection .card .startSectionBtns ').css({
    display: 'flex',
    justifyContent: 'center',
    marginTop: -100,
    opacity:0
})
$('#startSection .card .startSectionBtns button:first').css({
    width: 240,
    height: 70,
    fontWeight: 700,
    fontSize: 23,
    color: 'white',
    backgroundColor: '#8C82FC'

})
$('#startSection .card .startSectionBtns button:last').css({
    width: 240,
    height: 70,
    fontWeight: 700,
    fontSize: 23,
    color: 'white',
    backgroundColor: 'transparent'

})
$('#footerSection .card').css({
    display: 'grid',
    gridTemplateColumns: '2fr 1fr 1fr 1.5fr',
})

$('#footerSection .card .footCol ').css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginTop:20
})
$('#footerSection .card :nth-child(1)').css({
    justifyContent: 'flex-start',
})
$('#footerSection .card :nth-child(1) span').css({
    fontSize: 22,
    fontWeight: 500,
    display: 'block',
    marginTop: 40,
    width: 420,
})
$('#footerSection .card .footCol button').css({
    fontSize: 22,
    fontWeight: 500
})
$('#footerSection .card :nth-child(1) .logo button').css({
    fontSize: 34,
    fontWeight: 700,
})
$('#footerSection .card .footCol button:nth-child(1)').css({
    fontSize: 28,
    fontWeight: 700
})

$('#footerSection .card .footCol:nth-child(4) :nth-child(2)').css({
    fontSize: 22,
    fontWeight: 500,
    color: '#8C82FC',
    cursor: 'pointer',
    listStyle: 'none',
    paddingLeft: 0,
})
$('#footerSection .card .footCol:nth-child(4) :nth-child(2) :nth-child(1)').css({
    paddingLeft: 40,
    background: 'url("/src/vector.png") no-repeat 1%',
})
$('#footerSection .card .footCol:nth-child(4) :nth-child(2) :nth-child(2)').css({
    marginTop: 20,
    paddingLeft: 42,
    background: 'url("/src/vector (1).png") no-repeat 1%',
})

$('#footerSection .card .footCol:nth-child(4) :nth-child(3)').css({
    fontSize: 22,
    fontWeight: 500,
    width: 206
})


$('#companySection .card').css({
    marginTop: 0,
    height: 522,
    backgroundColor: '#F8F8FF',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',

})
$('#companySection .card .title').css({
    opacity: 0
})
$('#companySection .card .title :nth-child(1)').css({
    fontSize: 44,
    fontWeight: 800,
    marginTop: 0,
    marginBottom: 0,
})
$('#companySection .card .title :nth-child(2)').css({
    marginTop: 20,
    fontSize: 26,
    fontWeight: 500,
})
$('#companySection .card .brands').css({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gridColumnGap: 60,
    gridRowGap: 60,
})
$('#companySection .card .brands img').css({
    margin: 10,
    cursor: 'pointer',
    opacity: 0
})
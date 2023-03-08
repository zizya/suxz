$(window).resize(function () {
    if ((window).matchMedia('(min-width: 1350px)').matches) {
        //navbar
        $('#burger').slideUp(200, function () {
            $('.navbarBtn').slideDown()
        })

        //herosection
        $('#heroSection .card').css({
            marginTop: 105,
            flexDirection: 'row',
            minHeight: 620,
            paddingLeft: 81,
            paddingRight: 81,
            justifyContent: 'space-between',
            alignItems: 'flex-start',

        })
        $('#heroSection .card .heroImg  ').css({
            display: 'block',
        })
        $('.heroImgSmall img').css({
            display: 'none',
        })
        //learning section
        $('#learningsSection .card').css({
            paddingLeft: 81,
            paddingRight: 81,
            marginTop: 0,
            paddingTop: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            height: 777,
            backgroundColor: '#F8F8FF'

        })
        $('.learningsCards ').css({
            flexDirection: 'row',
            flexWrap: 'nowrap',
            justifyContent: 'space-between',
        })
        // aboutUsSection
        $('#aboutUsSection .card').css({
            marginTop: 80,
            paddingLeft: 81,
            paddingRight: 81,

            justifyContent: 'space-between',
            flexDirection: 'row',
            height: 650,
            alignItems: '',
        })
        $('.imgAbouts').css({
            width: 600,
            scale: '1'
        })
        $('.aboutUs').css({
            marginTop: 0,
            flexDirection: 'column',
            scale: '1'
        })
        //companySection 

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
            scale: '1',
        })
        $('#companySection .card .brands').css({
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr 1fr',
            gridColumnGap: 60,
            gridRowGap: 60,
        })
        //testimonial
        $('#testimonialSection .card').css({
            marginTop: 50,
            paddingLeft: 83,
            paddingRight: 83,

            flexDirection: 'column'
        })
        $('#testimonialSection .card .monCards').css({

            marginTop: 50,
            flexDirection: 'row',
            flexWrap: '',
            justifyContent: 'space-between',
        })
        console.log(1);
    }
    else if ((window).matchMedia('(min-width: 1200px)').matches) {
        //navbar
        $('.navbarBtn').slideUp(200, function () {
            $('#burger').slideDown(200)
        })

        //herosection
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
        //learning section
        $('#learningsSection .card').css({
            paddingLeft: 81,
            paddingRight: 81,
            marginTop: 0,
            paddingTop: 20,

            flexDirection: 'column',
            justifyContent: 'space-evenly',
            height: 'auto',
            backgroundColor: '#F8F8FF'

        })
        $('.learningsCards ').css({
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
        })

        // aboutUsSection
        $('#aboutUsSection .card').css({
            marginTop: 80,
            paddingLeft: 81,
            paddingRight: 81,

            justifyContent: 'space-between',
            flexDirection: 'row',
            height: 650,
            alignItems: '',
        })
        $('.imgAbouts').css({
            width: 600,
            scale: '1'
        })
        $('.aboutUs').css({
            marginTop: 0,
            flexDirection: 'column',
            scale: '1',
        })
        //companySection 

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
            scale: '1',
            marginBottom: '',
        })
        $('#companySection .card .brands').css({
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr 1fr',
            gridColumnGap: 60,
            gridRowGap: 60,
        })
        $('#companySection .card .brands img').css({
            scale: '1'
        })
        //testimonial
        $('#testimonialSection .card').css({
            marginTop: 50,
            paddingLeft: 83,
            paddingRight: 83,
            flexDirection: 'column'
        })
        $('#testimonialSection .card .title ').css({
            marginTop: '',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            scale: '1'
        })
        $('#testimonialSection .card .monCards').css({
            marginTop: 50,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            scale: '1'
        })
        //starrtsection
        $('#startSection .card .title').css({

            color: 'white',
            height: 160,

            flexDirection: 'column',
            alignItems: 'center',
            scale: '1'
        })

        $('#startSection .card .startSectionBtns ').css({

            justifyContent: 'center',
            marginTop: -100,
            scale: '1'
        })

        //FooterSection
        $('#footerSection .card').css({
            
            gridTemplateColumns: '2fr 1fr 1fr 1.5fr',
        })
        console.log(2);
    } else if ((window).matchMedia('(min-width: 900px)').matches) {
        //navbar
        $('.loginBar').slideDown(200).css({
            display: 'flex',
        })
        $('#burgerMenuSmall').slideUp(200, function () {
            $('#burger').slideDown(200)
        })

        //herosection
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
            marginBottom: 0,
        })
        //learning section
        $('#learningsSection .card').css({
            paddingLeft: 81,
            paddingRight: 81,
            marginTop: 0,
            paddingTop: 20,

            flexDirection: 'column',
            justifyContent: 'space-evenly',
            height: 'auto',
            backgroundColor: '#F8F8FF',
            alignItems: '',

        })
        $('.learningsCards ').css({
            marginTop: 0,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
        })
        $('#learningsSection .card .title').css({
            marginTop: 0,
            width: 555,
            scale: '1'
        })
        // aboutUsSection
        $('#aboutUsSection .card').css({
            marginTop: 80,
            paddingLeft: 81,
            paddingRight: 81,

            justifyContent: 'space-between',
            flexDirection: 'column',
            height: 'auto',
            alignItems: 'center',
        })
        $('.imgAbouts').css({
            marginTop: '',
            marginBottom: '',
            scale: '1'
        })
        $('.aboutUs').css({
            marginTop: -200,
            marginBottom: '',
            flexDirection: 'column',
            scale: '1',
        })

        //companySection 

        $('#companySection .card').css({
            marginTop: 0,
            height: 'auto',
            backgroundColor: '#F8F8FF',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center',

        })
        $('#companySection .card .title').css({
            scale: '0.7',
            marginBottom: '',
        })
        $('#companySection .card .brands').css({
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gridColumnGap: 60,
            gridRowGap: 60,
        })
        $('#companySection .card .brands img').css({
            scale: '0.7'
        })
        //testimonial


        $('#testimonialSection .card').css({
            marginTop: 50,
            paddingLeft: 83,
            paddingRight: 83,
            flexDirection: 'column'
        })
        $('#testimonialSection .card .title ').css({
            marginTop: -60,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            scale: '0.7'
        })
        $('#testimonialSection .card .monCards').css({
            marginTop: -30,
            marginBottom: '',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            scale: '0.7'
        })

        //starrtsection
        $('#startSection .card .title').css({

            color: 'white',
            height: 160,

            flexDirection: 'column',
            alignItems: 'center',
            scale: '0.7'
        })

        $('#startSection .card .startSectionBtns ').css({

            justifyContent: 'center',
            marginTop: -100,
            scale: '0.7'
        })
        //FooterSection
        $('#footerSection .card').css({
            
            gridTemplateColumns: '2fr 2fr',
        })
        console.log(3);
    }



    else if ((window).matchMedia('(min-width: 780px)').matches) {
        //navbar
        $('#burger').slideUp(200, function () {
            $('#burgerMenuSmall').slideDown(200).css({
                display: 'flex',
            })
        })
        $('.loginBar').slideUp(200)


        //herosection
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
            marginBottom: -40,
        })

        //learning section
        $('#learningsSection .card').css({
            paddingLeft: 81,
            paddingRight: 81,
            marginTop: 0,
            paddingTop: 0,

            flexDirection: 'column',
            justifyContent: 'space-evenly',
            height: 'auto',
            backgroundColor: '#F8F8FF',
            alignItems: 'center',
        })
        $('.learningsCards ').css({
            marginTop: -60,
            flexDirection: 'column',
            justifyContent: 'space-between',
        })
        $('#learningsSection .card .title').css({
            marginTop: -40,
            width: 555,
            scale: '0.5'
        })
        // aboutUsSection
        $('#aboutUsSection .card').css({
            marginTop: 80,
            paddingLeft: 81,
            paddingRight: 81,

            justifyContent: 'space-between',
            height: 'auto',
            alignItems: 'center',
        })
        $('.imgAbouts').css({
            marginTop: -260,
            marginBottom: -260,
            width: 600,
            scale: '0.5'
        })

        $('.aboutUs').css({
            marginTop: -200,
            marginBottom: -125,
            flexDirection: 'column',
            scale: '0.5'
        })

        //companySection 

        $('#companySection .card').css({
            marginTop: 0,
            height: 'auto',
            backgroundColor: '#F8F8FF',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center',

        })
        $('#companySection .card .title').css({
            scale: '0.5',
            marginBottom: -60,
        })
        $('#companySection .card .brands').css({
            display: 'grid',
            gridTemplateColumns: '1fr',
            gridColumnGap: 60,
            gridRowGap: 0,
        })
        $('#companySection .card .brands img').css({
            scale: '0.5'
        })
        //testimonial
        $('#testimonialSection .card').css({
            marginTop: 50,
            paddingLeft: 83,
            paddingRight: 83,
            flexDirection: 'column'
        })
        $('#testimonialSection .card .title ').css({
            marginTop: -90,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            scale: '0.5'
        })
        $('#testimonialSection .card .monCards').css({
            marginTop: -160,
            marginBottom: -210,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            scale: '0.5'
        })
        //startSection

        $('#startSection .card .title').css({

            color: 'white',
            height: 160,

            flexDirection: 'column',
            alignItems: 'center',
            scale: '0.4'
        })

        $('#startSection .card .startSectionBtns ').css({
            justifyContent: 'center',
            marginTop: -100,
            scale: '0.4'
        })
        
        //FooterSection
        $('#footerSection .card').css({
            gridTemplateColumns: '2fr',
           
        })
        console.log(4);
    }
})



$(window).on('load', function () {
    if ((window).matchMedia('(min-width: 1350px)').matches) {
        //navbar
        $('#burger').slideUp(200, function () {
            $('.navbarBtn').slideDown()
        })

        //herosection
        $('#heroSection .card').css({
            marginTop: 105,
            flexDirection: 'row',
            minHeight: 620,
            paddingLeft: 81,
            paddingRight: 81,
            justifyContent: 'space-between',
            alignItems: 'flex-start',

        })
        $('#heroSection .card .heroImg  ').css({
            display: 'block',
        })
        $('.heroImgSmall img').css({
            display: 'none',
        })
        //learning section
        $('#learningsSection .card').css({
            paddingLeft: 81,
            paddingRight: 81,
            marginTop: 0,
            paddingTop: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            height: 777,
            backgroundColor: '#F8F8FF'

        })
        $('.learningsCards ').css({
            flexDirection: 'row',
            flexWrap: 'nowrap',
            justifyContent: 'space-between',
        })
        // aboutUsSection
        $('#aboutUsSection .card').css({
            marginTop: 80,
            paddingLeft: 81,
            paddingRight: 81,

            justifyContent: 'space-between',
            flexDirection: 'row',
            height: 650,
            alignItems: '',
        })
        $('.imgAbouts').css({
            width: 600,
            scale: '1'
        })
        $('.aboutUs').css({
            marginTop: 0,
            flexDirection: 'column',
            scale: '1'
        })
        //companySection 

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
            scale: '1',
        })
        $('#companySection .card .brands').css({
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr 1fr',
            gridColumnGap: 60,
            gridRowGap: 60,
        })
        //testimonial
        $('#testimonialSection .card').css({
            marginTop: 50,
            paddingLeft: 83,
            paddingRight: 83,

            flexDirection: 'column'
        })
        $('#testimonialSection .card .monCards').css({

            marginTop: 50,
            flexDirection: 'row',
            flexWrap: '',
            justifyContent: 'space-between',
        })
        console.log(1);
    }
    else if ((window).matchMedia('(min-width: 1200px)').matches) {
        //navbar
        $('.navbarBtn').slideUp(200, function () {
            $('#burger').slideDown(200)
        })

        //herosection
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
        //learning section
        $('#learningsSection .card').css({
            paddingLeft: 81,
            paddingRight: 81,
            marginTop: 0,
            paddingTop: 20,

            flexDirection: 'column',
            justifyContent: 'space-evenly',
            height: 'auto',
            backgroundColor: '#F8F8FF'

        })
        $('.learningsCards ').css({
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
        })

        // aboutUsSection
        $('#aboutUsSection .card').css({
            marginTop: 80,
            paddingLeft: 81,
            paddingRight: 81,

            justifyContent: 'space-between',
            flexDirection: 'row',
            height: 650,
            alignItems: '',
        })
        $('.imgAbouts').css({
            width: 600,
            scale: '1'
        })
        $('.aboutUs').css({
            marginTop: 0,
            flexDirection: 'column',
            scale: '1',
        })
        //companySection 

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
            scale: '1',
            marginBottom: '',
        })
        $('#companySection .card .brands').css({
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr 1fr',
            gridColumnGap: 60,
            gridRowGap: 60,
        })
        $('#companySection .card .brands img').css({
            scale: '1'
        })
        //testimonial
        $('#testimonialSection .card').css({
            marginTop: 50,
            paddingLeft: 83,
            paddingRight: 83,
            flexDirection: 'column'
        })
        $('#testimonialSection .card .title ').css({
            marginTop: '',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            scale: '1'
        })
        $('#testimonialSection .card .monCards').css({
            marginTop: 50,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            scale: '1'
        })
        //starrtsection
        $('#startSection .card .title').css({

            color: 'white',
            height: 160,

            flexDirection: 'column',
            alignItems: 'center',
            scale: '1'
        })

        $('#startSection .card .startSectionBtns ').css({

            justifyContent: 'center',
            marginTop: -100,
            scale: '1'
        })

        //FooterSection
        $('#footerSection .card').css({
            
            gridTemplateColumns: '2fr 1fr 1fr 1.5fr',
        })
        console.log(2);
    } else if ((window).matchMedia('(min-width: 900px)').matches) {
        //navbar
        $('.loginBar').slideDown(200).css({
            display: 'flex',
        })
        $('#burgerMenuSmall').slideUp(200, function () {
            $('#burger').slideDown(200)
        })

        //herosection
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
            marginBottom: 0,
        })
        //learning section
        $('#learningsSection .card').css({
            paddingLeft: 81,
            paddingRight: 81,
            marginTop: 0,
            paddingTop: 20,

            flexDirection: 'column',
            justifyContent: 'space-evenly',
            height: 'auto',
            backgroundColor: '#F8F8FF',
            alignItems: '',

        })
        $('.learningsCards ').css({
            marginTop: 0,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
        })
        $('#learningsSection .card .title').css({
            marginTop: 0,
            width: 555,
            scale: '1'
        })
        // aboutUsSection
        $('#aboutUsSection .card').css({
            marginTop: 80,
            paddingLeft: 81,
            paddingRight: 81,

            justifyContent: 'space-between',
            flexDirection: 'column',
            height: 'auto',
            alignItems: 'center',
        })
        $('.imgAbouts').css({
            marginTop: '',
            marginBottom: '',
            scale: '1'
        })
        $('.aboutUs').css({
            marginTop: -200,
            marginBottom: '',
            flexDirection: 'column',
            scale: '1',
        })

        //companySection 

        $('#companySection .card').css({
            marginTop: 0,
            height: 'auto',
            backgroundColor: '#F8F8FF',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center',

        })
        $('#companySection .card .title').css({
            scale: '0.7',
            marginBottom: '',
        })
        $('#companySection .card .brands').css({
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gridColumnGap: 60,
            gridRowGap: 60,
        })
        $('#companySection .card .brands img').css({
            scale: '0.7'
        })
        //testimonial


        $('#testimonialSection .card').css({
            marginTop: 50,
            paddingLeft: 83,
            paddingRight: 83,
            flexDirection: 'column'
        })
        $('#testimonialSection .card .title ').css({
            marginTop: -60,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            scale: '0.7'
        })
        $('#testimonialSection .card .monCards').css({
            marginTop: -30,
            marginBottom: '',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            scale: '0.7'
        })

        //starrtsection
        $('#startSection .card .title').css({

            color: 'white',
            height: 160,

            flexDirection: 'column',
            alignItems: 'center',
            scale: '0.7'
        })

        $('#startSection .card .startSectionBtns ').css({

            justifyContent: 'center',
            marginTop: -100,
            scale: '0.7'
        })
        //FooterSection
        $('#footerSection .card').css({
            
            gridTemplateColumns: '2fr 2fr',
        })
        console.log(3);
    }



    else if ((window).matchMedia('(min-width: 780px)').matches) {
        //navbar
        $('#burger').slideUp(200, function () {
            $('#burgerMenuSmall').slideDown(200).css({
                display: 'flex',
            })
        })
        $('.loginBar').slideUp(200)


        //herosection
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
            marginBottom: -40,
        })

        //learning section
        $('#learningsSection .card').css({
            paddingLeft: 81,
            paddingRight: 81,
            marginTop: 0,
            paddingTop: 0,

            flexDirection: 'column',
            justifyContent: 'space-evenly',
            height: 'auto',
            backgroundColor: '#F8F8FF',
            alignItems: 'center',
        })
        $('.learningsCards ').css({
            marginTop: -60,
            flexDirection: 'column',
            justifyContent: 'space-between',
        })
        $('#learningsSection .card .title').css({
            marginTop: -40,
            width: 555,
            scale: '0.5'
        })
        // aboutUsSection
        $('#aboutUsSection .card').css({
            marginTop: 80,
            paddingLeft: 81,
            paddingRight: 81,

            justifyContent: 'space-between',
            height: 'auto',
            alignItems: 'center',
        })
        $('.imgAbouts').css({
            marginTop: -260,
            marginBottom: -260,
            width: 600,
            scale: '0.5'
        })

        $('.aboutUs').css({
            marginTop: -200,
            marginBottom: -125,
            flexDirection: 'column',
            scale: '0.5'
        })

        //companySection 

        $('#companySection .card').css({
            marginTop: 0,
            height: 'auto',
            backgroundColor: '#F8F8FF',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center',

        })
        $('#companySection .card .title').css({
            scale: '0.5',
            marginBottom: -60,
        })
        $('#companySection .card .brands').css({
            display: 'grid',
            gridTemplateColumns: '1fr',
            gridColumnGap: 60,
            gridRowGap: 0,
        })
        $('#companySection .card .brands img').css({
            scale: '0.5'
        })
        //testimonial
        $('#testimonialSection .card').css({
            marginTop: 50,
            paddingLeft: 83,
            paddingRight: 83,
            flexDirection: 'column'
        })
        $('#testimonialSection .card .title ').css({
            marginTop: -90,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            scale: '0.5'
        })
        $('#testimonialSection .card .monCards').css({
            marginTop: -160,
            marginBottom: -210,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            scale: '0.5'
        })
        //startSection

        $('#startSection .card .title').css({

            color: 'white',
            height: 160,

            flexDirection: 'column',
            alignItems: 'center',
            scale: '0.4'
        })

        $('#startSection .card .startSectionBtns ').css({
            justifyContent: 'center',
            marginTop: -100,
            scale: '0.4'
        })
        
        //FooterSection
        $('#footerSection .card').css({
            gridTemplateColumns: '2fr',
           
        })
        console.log(4);
    }
})
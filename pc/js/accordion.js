$(function () {
    setTimeout(function () {
        $('#hover_1').css('height', '0')
        $('#hover_1').css('padding-top', '0')

    }, 2000)


    $('#Allhober1').mouseover(function () {
        $('#hover_1').css('padding-top', '10px')
        $('#hover_1').css('height', '130px')
    })

    $('#Allhober1').mouseout(function () {
        $('#hover_1').css('padding-top', '0')
        $('#hover_1').css('height', '0')
    })


    $('#Allhober2').mouseover(function () {
        $('#hover_2').css({
            "height": "130px",
            "padding-top": "10px"
        })

    })

    $('#Allhober2').mouseout(function () {
        $('#hover_2').css('padding-top', '0')
        $('#hover_2').css('height', '0')
    })




    $('#Allhober3').mouseover(function () {
        $('#hover_3').css('padding-top', '10px')
        $('#hover_3').css('height', '390px')
    })

    $('#Allhober3').mouseout(function () {
        $('#hover_3').css('padding-top', '0')
        $('#hover_3').css('height', '0')
    })

    $('#Allhober4').mouseover(function () {
        $('#hover_4').css('padding-top', '10px')
        $('#hover_4').css('height', '390px')
    })

    $('#Allhober4').mouseout(function () {
        $('#hover_4').css('padding-top', '0')
        $('#hover_4').css('height', '0')
    })
})
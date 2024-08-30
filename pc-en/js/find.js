$(function () {

    var count = 0;

    $('#find_1').click(function () {
        count++;
        $(".answer_1>img").css({
            "visibility": "visible",
            "opacity": "1"
        });
        if (count == 3) {

            setTimeout(function () {
                $('.cover').css("visibility", "visible");
                $('.correctbut').css("visibility", "visible");
            }, 2000);
            $('.hint>a').css({
                'pointer-events':'none'
            })
        }

    })


    $('#find_2').click(function () {
        count++;
        $(".answer_2>img").css({
            "visibility": "visible",
            "opacity": "1"
        });
        if (count == 3) {

            setTimeout(function () {
                $('.cover').css("visibility", "visible");
                $('.correctbut').css("visibility", "visible");
            }, 2000);
            $('.hint>a').css({
                'pointer-events':'none'
            })
        }

    })


    $('#find_3').click(function () {
        count++;
        $(".answer_3>img").css({
            "visibility": "visible",
            "opacity": "1"
        });
        if (count == 3) {

            setTimeout(function () {
                $('.cover').css("visibility", "visible");
                $('.correctbut').css("visibility", "visible");
            }, 2000);
            $('.hint>a').css({
                'pointer-events':'none'
            })
        }

    })

    // $('#find_4').click(function () {
    //     count++;
    //     $(".answer_4>img").css({
    //         "visibility": "visible",
    //         "opacity": "1"

    //     });
    //     if (count == 5) {
    //         $('.cover').css("visibility", "visible");
    //         $('.correctbut').css("visibility", "visible");
    //     }

    // })
    // function check1() {
    //     count++;
    //     $(".answer_5>img").css({
    //         "visibility": "visible",
    //         "opacity": "1"

    //     });
    //     if (count == 5) {
    //         $('.cover').css("visibility", "visible");
    //         $('.correctbut').css("visibility", "visible");
    //     }
    // }
    //     $('#find_5').click(check1);
    $('.cover').click(function () {
        $('.cover').css("visibility", "hidden");
    })

    $('.hint>a').click(function () {
       $('.open').css({
      "visibility": "visible",
      "z-index":"300"
       })
  
    })
})
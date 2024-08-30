// 카운트1
var memberCountConTxt = 416029;


$({
  val: 0
}).animate({
  val: memberCountConTxt
}, {
  duration: 2000,
  step: function () {
    var num = numberWithCommas(Math.floor(this.val));

    $(".memberCountCon01").html(num );


  },
  complete: function () {
    var num = numberWithCommas(Math.floor(this.val));
    $(".memberCountCon01").html(num );

  }
});

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

var a = 1;

// 카운트2

$(window).scroll(function () {
  console.log($(document).scrollTop());
  var memberCountConTxt02 = 12000;


  var scrollevent = $(document).scrollTop();

  if (scrollevent < 554 && scrollevent > 100) {
    if (a) {
      $({
        val: 0
      }).animate({
        val: memberCountConTxt02
      }, {
        duration: 2000,
        step: function () {
          var num02 = numberWithCommas(Math.floor(this.val));
          $(".memberCountCon02").html(num02 );
        },
        complete: function () {
          var num02 = numberWithCommas(Math.floor(this.val));
          $(".memberCountCon02").html(num02 );
        }
      });
    }

    a = 0;

    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  }
})

var b = 1;
// 카운트3
$(window).scroll(function () {
  var scrollevent = $(document).scrollTop();
  var memberCountConTxt3 = 3753;

  if (scrollevent < 1400 && scrollevent > 554) {
    if (b) {
      $({
        val: 0
      }).animate({
        val: memberCountConTxt3
      }, {
        duration: 2000,
        step: function () {
          var num03 = numberWithCommas(Math.floor(this.val));

          $(".memberCountCon03").html(num03 );


        },
        complete: function () {
          var num03 = numberWithCommas(Math.floor(this.val));
          $(".memberCountCon03").html(num03);

        }
      });
    }
    b = 0;

    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  }
})


//카운트4
var c = 1;

$(window).scroll(function () {
  var scrollevent = $(document).scrollTop();

  var memberCountConTxt4 = 295;
  if (scrollevent < 1400 && scrollevent > 1200) {
    if (c) {
      $({
        val: 0
      }).animate({
        val: memberCountConTxt4
      }, {
        duration: 2000,
        step: function () {
          var num04 = numberWithCommas(Math.floor(this.val));

          $(".memberCountCon04").html(num04);


        },
        complete: function () {
          var num04 = numberWithCommas(Math.floor(this.val));
          $(".memberCountCon04").html(num04);

        }
      });
    }
    c = 0;

    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

  }
})


//카운트5
var d =1;
$(window).scroll(function () {
  var scrollevent = $(document).scrollTop();
  var memberCountConTxt5 = 108;
  if (scrollevent < 1450 && scrollevent > 1200) {
    if (d) {
      $({
        val: 0
      }).animate({
        val: memberCountConTxt5
      }, {
        duration: 2000,
        step: function () {
          var num05 = numberWithCommas(Math.floor(this.val));

          $(".memberCountCon05").html(num05);


        },
        complete: function () {
          var num05 = numberWithCommas(Math.floor(this.val));
          $(".memberCountCon05").html(num05);

        }
      });
    }
   d= 0;

    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  }
})
//카운트6
var e = 1;
$(window).scroll(function () {
  var scrollevent = $(document).scrollTop();
var memberCountConTxt6 = 462;
if (scrollevent < 1900 && scrollevent > 1850) {
  if (e) {
$({
  val: 0
}).animate({
  val: memberCountConTxt6
}, {
  duration: 2000,
  step: function () {
    var num06 = numberWithCommas(Math.floor(this.val));

    $(".memberCountCon06").html(num06);


  },
  complete: function () {
    var num06 = numberWithCommas(Math.floor(this.val));
    $(".memberCountCon06").html(num06);

  }
});
}
e= 0;
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
}
})

// 카운트7

var f =1;
$(window).scroll(function () {
  var scrollevent = $(document).scrollTop();
var memberCountConTxt7 = 387000;
if (scrollevent < 2700 && scrollevent > 2500) {
  if (f) {
$({
  val: 0
}).animate({
  val: memberCountConTxt7
}, {
  duration: 2000,
  step: function () {
    var num07 = numberWithCommas(Math.floor(this.val));

    $(".memberCountCon07").html(num07);


  },
  complete: function () {
    var num07 = numberWithCommas(Math.floor(this.val));
    $(".memberCountCon07").html(num07);

  }
});
}
f= 0;
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
}
})

// 카운트8

 var g =1;
 $(window).scroll(function () {
  var scrollevent = $(document).scrollTop();
var memberCountConTxt8 = 5443000;
if (scrollevent < 3200 && scrollevent > 3000) {
  if (g) {
$({
  val: 0
}).animate({
  val: memberCountConTxt8
}, {
  duration: 2000,
  step: function () {
    var num08 = numberWithCommas(Math.floor(this.val));

    $(".memberCountCon08").html(num08);


  },
  complete: function () {
    var num08 = numberWithCommas(Math.floor(this.val));
    $(".memberCountCon08").html(num08);

  }
});
}
g= 0;
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

}
})


// 카운트9
var h = 1;
$(window).scroll(function () {
  var scrollevent = $(document).scrollTop();
var memberCountConTxt9 = 10;
if (scrollevent < 1900 && scrollevent > 1850) {
  if (h) {
$({
  val: 0
}).animate({
  val: memberCountConTxt9
}, {
  duration: 2000,
  step: function () {
    var num09 = numberWithCommas(Math.floor(this.val));

    $(".memberCountCon09").html(num09);


  },
  complete: function () {
    var num09 = numberWithCommas(Math.floor(this.val));
    $(".memberCountCon09").html(num09);

  }
});
}
h= 0;
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
}
})

// 호버
$(function () {

  // 1번
  $('.subpage3-1').mouseover(function () {
    $('.subpage3>a').css("background-color", "rgba(0, 0, 0, 0.5)");
  })

  $('.subpage3-1').mouseout(function () {
    $('.subpage3>a').css("background-color", "rgba(0, 0, 0, 0)");
  })

  $('.subpage3').mouseover(function () {
    $('.subpage3>a').css("background-color", "rgba(0, 0, 0, 0.5)");
  })
  $('.subpage3').mouseout(function () {
    $('.subpage3>a').css("background-color", "rgba(0, 0, 0, 0)");
  })

  // 2번
  $('.subpage3_2').mouseover(function () {
    $('.subpage3_2>a').css("background-color", "rgba(0, 0, 0, 0.5)");
  })

  $('.subpage3_2>a').mouseout(function () {
    $('.subpage3_2>a').css("background-color", "rgba(0, 0, 0, 0)");
  })

  $('.subpage3-2').mouseover(function () {
    $('.subpage3_2>a').css("background-color", "rgba(0, 0, 0, 0.5)");
  })
  $('.subpage3-2').mouseout(function () {
    $('.subpage3_2>a').css("background-color", "rgba(0, 0, 0, 0)");
  })

  //3번

  $('.subpage3_3').mouseover(function () {
    $('.subpage3_3>a').css("background-color", "rgba(0, 0, 0, 0.5)");
  })

  $('.subpage3_3>a').mouseout(function () {
    $('.subpage3_3>a').css("background-color", "rgba(0, 0, 0, 0)");
  })

  $('.subpage3-3').mouseover(function () {
    $('.subpage3_3>a').css("background-color", "rgba(0, 0, 0, 0.5)");
  })
  $('.subpage3-3').mouseout(function () {
    $('.subpage3_3>a').css("background-color", "rgba(0, 0, 0, 0)");
  })



  //4번

  $('.subpage3_4').mouseover(function () {
    $('.subpage3_4>a').css("background-color", "rgba(0, 0, 0, 0.5)");
  })

  $('.subpage3_4>a').mouseout(function () {
    $('.subpage3_4>a').css("background-color", "rgba(0, 0, 0, 0)");
  })

  $('.subpage3-4').mouseover(function () {
    $('.subpage3_4>a').css("background-color", "rgba(0, 0, 0, 0.5)");
  })
  $('.subpage3-4').mouseout(function () {
    $('.subpage3_4>a').css("background-color", "rgba(0, 0, 0, 0)");
  })


  //5번
  $('.subpage3_5').mouseover(function () {
    $('.subpage3_5>a').css("background-color", "rgba(0, 0, 0, 0.5)");
  })

  $('.subpage3_5>a').mouseout(function () {
    $('.subpage3_5>a').css("background-color", "rgba(0, 0, 0, 0)");
  })

  $('.subpage3-5').mouseover(function () {
    $('.subpage3_5>a').css("background-color", "rgba(0, 0, 0, 0.5)");
  })
  $('.subpage3-5').mouseout(function () {
    $('.subpage3_5>a').css("background-color", "rgba(0, 0, 0, 0)");
  })

  // 6번

  $('.subpage3_6').mouseover(function () {
    $('.subpage3_6>a').css("background-color", "rgba(0, 0, 0, 0.5)");
  })

  $('.subpage3_6>a').mouseout(function () {
    $('.subpage3_6>a').css("background-color", "rgba(0, 0, 0, 0)");
  })

  $('.subpage3-6').mouseover(function () {
    $('.subpage3_6>a').css("background-color", "rgba(0, 0, 0, 0.5)");
  })
  $('.subpage3-6').mouseout(function () {
    $('.subpage3_6>a').css("background-color", "rgba(0, 0, 0, 0)");
  })

  // 7번
  $('.subpage3_7').mouseover(function () {
    $('.subpage3_7>a').css("background-color", "rgba(0, 0, 0, 0.5)");
  })

  $('.subpage3_7>a').mouseout(function () {
    $('.subpage3_7>a').css("background-color", "rgba(0, 0, 0, 0)");
  })

  $('.subpage3-7').mouseover(function () {
    $('.subpage3_7>a').css("background-color", "rgba(0, 0, 0, 0.5)");
  })
  $('.subpage3-7').mouseout(function () {
    $('.subpage3_7>a').css("background-color", "rgba(0, 0, 0, 0)");
  })
})
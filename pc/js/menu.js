$(function () {
    $(".menu_btn>img").click(function () {
        $(".menu_in").css("width", "100%");
        $(".menu_in_back").css("width", "17%");
        $(".meun_padding").css("visibility", "visible");
        $("meun_padding").css("visibility","visible")
    })
    $(".meun_close").click(function () {
        $(".menu_in").css("width", "0%");
        $(".menu_in_back").css("width", "0%");
        $(".meun_padding").css("visibility", "hidden");

    })
    $(".menu_in ").click(function(){
        $(".menu_in").css("width", "0%");
        $(".menu_in_back").css("width", "0%");
        $(".meun_padding").css("visibility", "hidden");
    })

  $('.Top').hide();

  $(window).scroll(function(){
      if($(this).scrollTop()>200){
        $('.Top').fadeIn();
      }else{
          $(".Top").fadeOut();
      }
  })

  $(".Top").click(function(){
      $('body,html').animate({
          scrollTop:0
      },400);
      return false;
  })
})
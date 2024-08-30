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
    $(".menu_in").click(function(){
        $(".menu_in").css("width", "0%");
        $(".menu_in_back").css("width", "0%");
        $(".meun_padding").css("visibility", "hidden");
    })
})
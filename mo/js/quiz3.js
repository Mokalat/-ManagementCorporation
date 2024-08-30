$(function () {
    var count = 0;

    //1번
    $('.btn2').one('click',function () {
       
        $('.hide').css({
            "display": "block"
        });
       
    })

    $('.hide').click(function () {
        count++;
        $('.hide').css({
            "display": "none"
        })
        $('.btn2>img').attr("src", "https://kdnlife.cafe24.com/mobile_web/images/quiz_img/quiz3/quiz3-b1_1.jpg");
        if(count==3){
            $(function(){
             $('.bag').css("visibility", "visible");
             })
         }
    })


    // 2번

    $('.btn3').one('click',function () {
   
        $('.hide1').css({
            "display": "block"
        });
   
    })


    $('.hide1').click(function () {
        count++;
        $('.hide1').css({
            "display": "none"
        })
        $('.btn3>img').attr("src", "https://kdnlife.cafe24.com/mobile_web/images/quiz_img/quiz3/quiz3-b2_1.jpg");
        if(count==3){
            $(function(){
             $('.bag').css("visibility", "visible");
             })
         }
    
    })


    // 3번
    $('.btn5').one('click',function () {
       
        $('.hide2').css({
            "display": "block"
        });
     
    })


    $('.hide2').click(function () {
        count++;
        $('.hide2').css({
            "display": "none"
        })
        $('.btn5>img').attr("src", "https://kdnlife.cafe24.com/mobile_web/images/quiz_img/quiz3/quiz3-b3_1.jpg");
        if(count==3){
            $(function(){
             $('.bag').css("visibility", "visible");
             })
         }
    
    })

    $('.exit').click(function(){
        $('.bag').css("visibility", "hidden");
    })
   
})
// $(document).ready(function () {

//     var navHeight = $(".ion").height();
//     var navHeight1 = $(".v1>img").height();
//     var navHeight2 = $(".v2").height();
//     var navHeight3 = $(".v3").height();
//     var navHeight4 = $(".v4").height();
//     var navHeight5 = $(".v5").height();
//     var navHeight6 = $(".v6").height();
//     $(function(){
//         $('.v1>img').show().animate({left: 80}).css({"opacity": "1"});
//     })
//     $(window).scroll(function () {
   
//         var rollIt = $(this).scrollTop() >= navHeight1;
//         if (rollIt) {
//             $('.v2>img').show().animate({left:250}).css({"opacity": "1"});
//         }

//         var rollIt = $(this).scrollTop() >= navHeight2;
//         if (rollIt) {
//             $('.v3>img').show().animate({left:100}).css({"opacity": "1"});
//         }

//         var rollIt = $(this).scrollTop() >= navHeight3;
//         if (rollIt) {
//             $('.v4>img').show().animate({left:220}).css({"opacity": "1"});
//         }
//         var rollIt = $(this).scrollTop() >= navHeight4;
//         if (rollIt) {
//             $('.v5>img').show().animate({left:120}).css({"opacity": "1"});
//         }
//         var rollIt = $(this).scrollTop() >= navHeight5;
//         if (rollIt) {
//             $('.v6>img').show().animate({left:220}).css({"opacity": "1"});
//         }
//         var rollIt = $(this).scrollTop() >= navHeight6;
//         if (rollIt) {
//             $('.v7>img').show().animate({left:150}).css({"opacity": "1"});
//         }

//     });
// })
function subPage300(){
    let marginL = [-215, -403, -363, -448, -440, -474, -393];
    
    function animateFun1(i){
        const vMove = document.getElementById("vMove"+(i+1));
        vMove.style.marginLeft = marginL[i]+"px";
        vMove.style.opacity = 1;
        // console.log(windowS);
    }
    animateFun1(0);
    window.addEventListener("scroll",function(e){
        const windowS = window.scrollY;
        if(windowS>=0) {0}
        if(windowS>=453){animateFun1(1);}
        if(windowS>=1034){animateFun1(2);}
        if(windowS>=1554){animateFun1(3);}
        if(windowS>=2134){animateFun1(4);}
        if(windowS>=2696){animateFun1(5);}
        if(windowS>=3337){animateFun1(6);}
    });
}
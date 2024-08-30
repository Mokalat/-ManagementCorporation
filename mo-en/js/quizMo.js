function sizeCol(size, windowSize) {
    let resultSize = 0;
    resultSize = size * 100 / windowSize;
    return resultSize;
}
function ResultFun(type, type2, func1) {
    let indexType = 0;
    indexType = type2 == 2 ? 2 : 1;
    const answerUrl = "./images/quiz_img/quiz_answer"+indexType+".png";
    const wrongUrl = "./images/quiz_img/quiz_wrong"+indexType+".png";
    if (type) {
        $("#resultImg").attr("src", answerUrl);
    } else {
        $("#resultImg").attr("src", wrongUrl);
    }
    $("#resultArea").css({
        "visibility": "visible"
    });

    function resultBoxColse(e) {
        $("#resultArea").css("visibility", "hidden");
        func1&&(func1());
    }
    $(".resultExitBtn").on("click", resultBoxColse);
}

function onloadFun(quizIndex) {

    const inputBoxSize = $(".inputBoxSize").height();
    const windowSizeX = window.innerWidth;
    $("#inputArea").css("height", inputBoxSize - 1 + "px");

    function quizClick(e) {
        let index = quizIndex;
        let answerInput = $(".inputTypeText").val();
        let type1Arr = [
            ["무방류 시스템", "무방류시스템"],
            ["분리매립"],
            ["드림파크"]
        ];
        const userAnswer = answerInput.trim();
        answerReturn = userAnswer == type1Arr[index][0];
        index == 0 && (answerReturn = userAnswer == type1Arr[index][0] || userAnswer == type1Arr[index][1]);
        if (answerReturn) {
            $(".inputTypeText").attr("readonly", "true").css({
                "color": "#f0830a"
            });
            // $("#inputBtnArea").off("click", quizClick);
            // answerInput.removeEventListener("keyup", answerKeyUp);
            // checkResultFun(1);
            ResultFun(1, quizIndex);
        } else {
            // checkResultFun(0);
            ResultFun(0, quizIndex);
        }

    }

    function widnowSize() {
        const inputBoxSize = $(".inputBoxSize").height();
        const windowSizeX = window.innerWidth;
        $("#inputArea").css("height", inputBoxSize - 1 + "px");
        $("#resultBox").css("height", $("#resultImg").height + "px");

        $(".inputTypeText").css({
            "font-size": "50px"
        });
        if (windowSizeX <= 714 && windowSizeX > 564) {
            $(".inputTypeText").css({
                "font-size": "40px"
            });
        }
        if (windowSizeX <= 564 && windowSizeX > 425) {
            $(".inputTypeText").css({
                "font-size": "30px"
            });
        }
        if (windowSizeX <= 425 && windowSizeX > 354) {
            $(".inputTypeText").css({
                "font-size": "25px"
            });
        }
        if (windowSizeX <= 354 && windowSizeX > 288) {
            $(".inputTypeText").css({
                "font-size": "20px"
            });
        }
        if (windowSizeX <= 288 && windowSizeX > 0) {
            $(".inputTypeText").css({
                "font-size": "16px"
            })
        }
    }

    function answerKeyUp(e) {
        // e.preventDefault();
        if (window.event.keyCode == 13) {
            quizClick();
        }
    } //엔터로 정답체크
    window.addEventListener("keydown", answerKeyUp);
    $("#inputBtnArea").on("click", quizClick);
    window.addEventListener("resize", widnowSize);
    widnowSize();

}

function quiz7Fun(type) {
    
    function windowSize() {
        const headerSize = $("#headerSize").height();
        const quizSize1 = $("#quizSize1").height();
        const quizSize2 = $("#quizSize2").height();

        $(".quizAreaBox").css("height", (quizSize1 + quizSize2 - 1) + "px");
        $(".resultBoxArea").css("height", quizSize2 + "px");

        // sizeCol
        $(".imgBoxA").css("width", sizeCol(156, 820) + "%");
    }
    window.addEventListener("resize", windowSize);
    windowSize();
    let imgClickArr = [];
    let imgAnswerArr = [];
    type == 1 && (imgAnswerArr=[3, 2, 4, 1]);
    type == 2 && (imgAnswerArr=[1, 3, 4, 2]);
    let j = 0;
    let i = 0;
    function ressetFun1(){
        imgClickArr = [];
        type == 1 && (imgAnswerArr=[3, 2, 4, 1]);
        type == 2 && (imgAnswerArr=[1, 3, 4, 2]);
        j = 0;
        i = 0;
        $("#clickImg1").attr("src", "./images/quiz_img/quiz"+(type+6)+"/quiz"+(type+6)+"_img2.jpg");
        $("#clickImg2").attr("src", "./images/quiz_img/quiz"+(type+6)+"/quiz"+(type+6)+"_img3.jpg");
        $("#clickImg3").attr("src", "./images/quiz_img/quiz"+(type+6)+"/quiz"+(type+6)+"_img4.jpg");
        $("#clickImg4").attr("src", "./images/quiz_img/quiz"+(type+6)+"/quiz"+(type+6)+"_img5.jpg");
        $("#imgCheak1").attr("src","./images/quiz_img/quiz"+(type+6)+"/quiz"+(type+6)+"_img_cheak1.jpg");
        $("#imgCheak2").attr("src","./images/quiz_img/quiz"+(type+6)+"/quiz"+(type+6)+"_img_cheak1.jpg");
        $("#imgCheak3").attr("src","./images/quiz_img/quiz"+(type+6)+"/quiz"+(type+6)+"_img_cheak1.jpg");
        $("#imgCheak4").attr("src","./images/quiz_img/quiz"+(type+6)+"/quiz"+(type+6)+"_img_cheak1.jpg");
        const clickImg1 = document.getElementById("clickImg1");
        const clickImg2 = document.getElementById("clickImg2");
        const clickImg3 = document.getElementById("clickImg3");
        const clickImg4 = document.getElementById("clickImg4");
        clickImg1.addEventListener("click", clickFun);
        clickImg2.addEventListener("click", clickFun);
        clickImg3.addEventListener("click", clickFun);
        clickImg4.addEventListener("click", clickFun);
    }//리셋
    function clickFun(e) {
        const clickIndex = e.target.id[8];
        e.target.removeEventListener("click", clickFun);
        imgClickArr.push(clickIndex);
        e.target.src = "./images/quiz_img/quiz"+(type+6)+"/quiz"+(type+6)+"_img" + (Number(clickIndex) + 1) + "_cover.jpg";


        $("#imgCheak" + ++j).attr("src", "./images/quiz_img/quiz"+(type+6)+"/quiz"+(type+6)+"_img_cheak" + (Number(clickIndex) + 1) + ".jpg");
        if (imgClickArr.length == 4) {
            imgAnswerArr.forEach(function (value1, index1) {
                imgClickArr[index1] == value1 && (i++);
            });
            i >= 3 && (ResultFun(1, type));
            i < 3 && (ResultFun(0, type, ressetFun1));
        }
    }
    const clickImg1 = document.getElementById("clickImg1");
    const clickImg2 = document.getElementById("clickImg2");
    const clickImg3 = document.getElementById("clickImg3");
    const clickImg4 = document.getElementById("clickImg4");
    clickImg1.addEventListener("click", clickFun);
    clickImg2.addEventListener("click", clickFun);
    clickImg3.addEventListener("click", clickFun);
    clickImg4.addEventListener("click", clickFun);
}
function checkResultFun(type, type2) { //  1 : 정답 / 0 : 오답
    // const nextBtn = document.getElementById("nextBtn");
    const resultBox = document.getElementById("resultBox");
    const resultTxt1 = document.getElementById("resultTxt1");
    const resultArea = document.getElementById("resultArea");
    const explanationBox = document.getElementById("explanationBox");

    function resultNoneFun(e) {
        resultArea.style.display = "none";
    }
    if (type) {
        resultTxt1.innerText = "정답";
        resultBox.className = "resultBox trueBox";
        if (type2) {
            resultBox.className += " exTrueBox";
            explanationBox.style.display = "flex";
        }
        // nextBtn.style.display = "block";
    } else {
        resultTxt1.innerText = "오답";
        resultBox.className = "resultBox falseBox";
        if (type2) {
            explanationBox.style.display = "none";
        }
    }
    resultArea.style.display = "flex";
    resultArea.addEventListener("click", resultNoneFun);

} // 정답의 경우 checkResultFun(1); / 오답의 경우 checkResultFun(0);


function type1Fun(index) {
    const answerCheck = document.getElementById("answerCheck");
    let answerInput = document.getElementById("answerInput");
    let type1Arr = [
        ["무방류 시스템", "무방류시스템"],
        ["분리매립"],
        ["드림파크"]
    ];

    function answerKeyUp(e) {
        e.preventDefault();
        if (window.event.keyCode == 13) {
            answerFun1();
        }
    } //엔터로 정답체크
    function answerFun1() {
        answerInput = document.getElementById("answerInput");
        const userAnswer = answerInput.value.trim();
        let answerReturn = userAnswer == type1Arr[index][0];


        index == 0 && (answerReturn = userAnswer == type1Arr[index][0] || userAnswer == type1Arr[index][1]);
        if (answerReturn) {
            answerInput.setAttribute("readonly", "true");
            answerCheck.removeEventListener("click", answerFun1);
            answerInput.removeEventListener("keyup", answerKeyUp);
            checkResultFun(1);
        } else {
            checkResultFun(0);
        }

    } //정답체크
    // function answerInputFun() {
    //     this.addEventListener("keyup", answerKeyUp);
    // }
    answerCheck.addEventListener("click", answerFun1);
    answerInput.addEventListener("keyup", answerKeyUp);


} //초성퀴즈
function oxQuizFun(type) {
    const oBtn = document.getElementById("oBtn1");
    const xBtn = document.getElementById("xBtn0");
    const oxArr = [1, 1, 1];

    function checkFun(e) {
        const choseBtn = e.target.id[4];
        if (oxArr[type] == choseBtn) {
            checkResultFun(1, 1);
        } else {
            checkResultFun(0, 1);
        }
    }
    oBtn.addEventListener("click", checkFun);
    xBtn.addEventListener("click", checkFun);
}

function dragImgFun1() {

    const blankBox1 = document.getElementById("blankBox1");
    const blankBox2 = document.getElementById("blankBox2");
    const blankBox3 = document.getElementById("blankBox3");
    const blankBox4 = document.getElementById("blankBox4");

    const content1 = document.getElementById("myContent1");
    const content2 = document.getElementById("myContent2");
    const content3 = document.getElementById("myContent3");
    const content4 = document.getElementById("myContent4");

    function allowDrop(ev) {
        ev.preventDefault();
    }

    function drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
        // ev.target.draggable = false;
    }

    function drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
        // ev.target.removeEventListener("drop", drop);
    }

    blankBox1.addEventListener("drop", drop);
    blankBox1.addEventListener("dragover", allowDrop);

    blankBox2.addEventListener("drop", drop);
    blankBox2.addEventListener("dragover", allowDrop);

    blankBox3.addEventListener("drop", drop);
    blankBox3.addEventListener("dragover", allowDrop);

    blankBox4.addEventListener("drop", drop);
    blankBox4.addEventListener("dragover", allowDrop);

    content1.draggable = "ture";
    content1.addEventListener("dragstart", drag);

    content2.draggable = "ture";
    content2.addEventListener("dragstart", drag);

    content3.draggable = "ture";
    content3.addEventListener("dragstart", drag);

    content4.draggable = "ture";
    content4.addEventListener("dragstart", drag);
}

function dragImgFun(type) {
    let answerArr = [];
    type == 1 && (answerArr = [3, 2, 4, 1]);//매립가스 발전 과정
    type == 2 && (answerArr = [1, 3, 4, 2]);//폐기물 매립 과정
    const resetBtn = document.getElementById("resetBtn");
    const content1 = document.getElementById("myContent1");
    const content2 = document.getElementById("myContent2");
    const content3 = document.getElementById("myContent3");
    const content4 = document.getElementById("myContent4");

    const coypContent1 = content1.cloneNode(true);
    const coypContent2 = content2.cloneNode(true);
    const coypContent3 = content3.cloneNode(true);
    const coypContent4 = content4.cloneNode(true);

    function resestFun() {

        const blankBox1 = document.getElementById("blankBox1");
        const blankBox2 = document.getElementById("blankBox2");
        const blankBox3 = document.getElementById("blankBox3");
        const blankBox4 = document.getElementById("blankBox4");
        const exampleImgBox1 = document.getElementById("exampleImgBox1");
        const exampleImgBox2 = document.getElementById("exampleImgBox2");
        const exampleImgBox3 = document.getElementById("exampleImgBox3");
        const exampleImgBox4 = document.getElementById("exampleImgBox4");
        //초기화
        blankBox1.firstChild && (blankBox1.removeChild(blankBox1.firstChild));
        blankBox2.firstChild && (blankBox2.removeChild(blankBox2.firstChild));
        blankBox3.firstChild && (blankBox3.removeChild(blankBox3.firstChild));
        blankBox4.firstChild && (blankBox4.removeChild(blankBox4.firstChild));
        exampleImgBox1.firstChild && (exampleImgBox1.removeChild(exampleImgBox1.firstChild));
        exampleImgBox2.firstChild && (exampleImgBox2.removeChild(exampleImgBox2.firstChild));
        exampleImgBox3.firstChild && (exampleImgBox3.removeChild(exampleImgBox3.firstChild));
        exampleImgBox4.firstChild && (exampleImgBox4.removeChild(exampleImgBox4.firstChild));

        exampleImgBox1.appendChild(coypContent1);
        exampleImgBox2.appendChild(coypContent2);
        exampleImgBox3.appendChild(coypContent3);
        exampleImgBox4.appendChild(coypContent4);
        let userArr = {};

        //새 이미지 불러오기
        const content1 = document.getElementById("myContent1");
        const content2 = document.getElementById("myContent2");
        const content3 = document.getElementById("myContent3");
        const content4 = document.getElementById("myContent4");

        function allowDrop(ev) {
            ev.preventDefault();
        }

        function drag(ev) {
            ev.dataTransfer.setData("text", ev.target.id);

        }

        function drop(ev) {
            function imgCheak() {
                let imgBool = true;
                answerArr.forEach(function (v, i) {
                    userArr["no" + (i + 1)] != v && (imgBool = false);
                });
                if (imgBool) {
                    checkResultFun(1);
                } else {
                    checkResultFun(0);
                }
                userArr = {};
            };

            function imgDrag() {
                const nowBlank = document.getElementById(ev.target.id);

                if (nowBlank.childNodes.length <= 0) {
                    ev.preventDefault();
                    var data = ev.dataTransfer.getData("text");
                    ev.target.appendChild(document.getElementById(data));
                    // console.log(ev.target.firstChild.id[9]);
                    // console.log(ev.target.id[8]);
                    userArr["no" + (ev.target.id[8])] = ev.target.firstChild.id[9];
                    // checkResultFun(1);
                    document.getElementById("blankBox1").firstChild &&
                        document.getElementById("blankBox2").firstChild &&
                        document.getElementById("blankBox3").firstChild &&
                        document.getElementById("blankBox4").firstChild && (imgCheak());
                    // if (Object.keys(userArr).length == 4) {


                    // }
                }
            }
            switch (ev.target.id) {
                case "blankBox1":
                    imgDrag();
                    break;
                case "blankBox2":
                    imgDrag();
                    break;
                case "blankBox3":
                    imgDrag();
                    break;
                case "blankBox4":
                    imgDrag();
                    break;
            }
        }
        //드래그 이벤트
        blankBox1.addEventListener("drop", drop);
        blankBox2.addEventListener("drop", drop);
        blankBox3.addEventListener("drop", drop);
        blankBox4.addEventListener("drop", drop);

        blankBox1.addEventListener("dragover", allowDrop);
        blankBox2.addEventListener("dragover", allowDrop);
        blankBox3.addEventListener("dragover", allowDrop);
        blankBox4.addEventListener("dragover", allowDrop);

        content1.addEventListener("dragstart", drag);
        content2.addEventListener("dragstart", drag);
        content3.addEventListener("dragstart", drag);
        content4.addEventListener("dragstart", drag);
    }
    resetBtn.addEventListener("click", resestFun);
    resestFun();
}
function parallaxFun() {
    const parallaOne = document.getElementsByClassName("parallaOne");
    const parallaxScroll = document.getElementById("parallaxScroll");
    const moveBasic = document.getElementsByClassName("moveBasic");
    let i = 0;
    let scrollArr = [];
    while (i < parallaOne.length) {
        scrollArr.push(parallaOne[i].offsetHeight * i);
        moveBasic[i];
        i++;
    }
    let j = 0;
    function scrollMoveFun(e) {
        const scrollMove = e.target.scrollTop;
        const posiCenterY = window.innerHeight / 2 - 250; //배경 센터
        const posiCenterX = window.innerWidth / 2 - 500; //배경 센터
        function moveImg(pageIndex, movePx) {
            const moveBasic = document.getElementsByClassName("moveBasic");
            let backPosition = "center " + (posiCenterY - (movePx / 1500 * (scrollMove - scrollArr[pageIndex +
                1]))) + "px";
            moveBasic[pageIndex].style.backgroundPosition = backPosition;
        }

        function ObjectMoving(pageIndex) {
            this.pageIndex = pageIndex;
            this.minusScroll = scrollMove - scrollArr[this.pageIndex + 1];
            this.obMove = function (ObId, movePx, ObX, ObY) {
                let moveObject = document.getElementById(ObId);
                let centerVal = posiCenterY + ObY;
                let moveVal = (movePx / 1500) * this.minusScroll;
                let backPosition = (posiCenterX + ObX) + "px " + (centerVal - moveVal) + "px";
                moveObject.style.backgroundPosition = backPosition;
            }//이미지 움직임
            this.textMoves = function (ObId, movePx, ObX, ObY) {
                let moveObject = document.getElementById(ObId);
                // const centerVal = posiCenterY + ObY;
                let centerVal = 250;
                let moveVal = (movePx / 1500) * this.minusScroll;
                let txtTop = Math.floor(centerVal - moveVal) + "px";
                moveObject.style.top = txtTop;
            }//텍스트 움직임
        }
        let imgBoxM = 500;
        let txtBoxM = -1300;
        if (scrollMove > 0 && scrollMove < 1000) {
            moveImg(0, 150);
            const oM0 = new ObjectMoving(0);
            oM0.obMove("imgBox0", imgBoxM, 30, 150);
            oM0.textMoves("txtBox0", txtBoxM, 0, 0);
        }
        if (scrollMove > 500 && scrollMove < 1500) {
            moveImg(1, 150);
            const oM1 = new ObjectMoving(1);
            oM1.obMove("imgBox1", imgBoxM, 30, 150);
            oM1.textMoves("txtBox1", txtBoxM, 0, 0);

        }
        if (scrollMove > 1000 && scrollMove < 2000) {
            moveImg(2, 150);
            const oM2 = new ObjectMoving(2);
            oM2.obMove("moveOb20", 300, 250, 100);
            oM2.obMove("imgBox2", imgBoxM, 30, 150);
            oM2.textMoves("txtBox2", txtBoxM, 0, 0);
        }
        if (scrollMove > 1500 && scrollMove < 2500) {
            moveImg(3, 150);
            const oM3 = new ObjectMoving(3);
            oM3.obMove("moveOb30", 300, 0, 0);
            oM3.obMove("imgBox3", imgBoxM, 30, 150);
            oM3.textMoves("txtBox3", txtBoxM, 0, 0);
        }
        if (scrollMove > 2000 && scrollMove < 3000) {
            moveImg(4, 150);
            const oM4 = new ObjectMoving(4);
            oM4.obMove("moveOb40", 300, 0, -100);
            oM4.obMove("imgBox4", imgBoxM, 30, 150);
            oM4.textMoves("txtBox4", txtBoxM, 0, 0);
        }
        if (scrollMove > 2500 && scrollMove < 3500) {
            moveImg(5, 150);
            const oM5 = new ObjectMoving(5);
            oM5.obMove("imgBox5", imgBoxM, 30, 300);
            oM5.textMoves("txtBox5", txtBoxM, 0, 0);
        }
    }
    parallaxScroll.addEventListener("scroll", scrollMoveFun); //스크롤 이벤트
    this.addEventListener("click", function (e) {
        switch (e.target.id) {
            case "scrollBtn0":
                parallaxScroll.scrollTo(0, 0);
                break;
            case "scrollBtn1":
                parallaxScroll.scrollTo(0, 500);
                break;
            case "scrollBtn2":
                parallaxScroll.scrollTo(0, 1000);
                break;
            case "scrollBtn3":
                parallaxScroll.scrollTo(0, 1500);
                break;
            case "scrollBtn4":
                parallaxScroll.scrollTo(0, 2000);
                break;
            case "scrollBtn5":
                parallaxScroll.scrollTo(0, 2500);
                break;
            case "scrollBtn6":
                parallaxScroll.scrollTo(0, 3000);
                break;
            default:
                break;
        }
    });//스크롤 이동 이벤트
    this.addEventListener("resize", scrollMoveFun);
}
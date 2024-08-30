function mapMove() {
    // const clickBtn1 = document.getElementById("clickBtn1");
    // const clickBtn2 = document.getElementById("clickBtn2");
    // const clickBtn3 = document.getElementById("clickBtn3");
    // const clickBtn4 = document.getElementById("clickBtn4");
    // const clickBtn5 = document.getElementById("clickBtn5");
    // const clickBtn6 = document.getElementById("clickBtn6");
    // const clickBtn7 = document.getElementById("clickBtn7");
    // const clickBtn8 = document.getElementById("clickBtn8");
    // const clickBtn9 = document.getElementById("clickBtn9");
    // const exitBtn = document.getElementById("exitBtn");
    let toggle = 0;

    function moveImage(targetNum) {
        const owl = $('.imagesArea' + targetNum + '>.owl-carousel');
        owl.trigger('play.owl.autoplay', [2000]);
        document.getElementById("body").classList = "scrollLock";
        // this.removeEventListener()
        document.body.classList.add("stop-scrolling");
        const backImage = document.getElementById("backImage");
        const classNum = "backImage backMove" + targetNum;
        const blackPage = document.getElementById("blackPage" + targetNum);
        const contentArea = document.getElementById("contentArea" + targetNum);
        const content1 = document.getElementById("content1");

        backImage.className = classNum;
        blackPage.style.visibility = "visible";
        blackPage.style.opacity = "1";
        content1.style.opacity = "0";
        setTimeout(function () {
            contentArea.style.marginTop = "0px";
            contentArea.style.opacity = "1";
        }, 1000);
        toggle = 1;
    }

    function colseWindow(targetNum) {
        document.getElementById("body").classList = "";
        const owl = $('.imagesArea1>.owl-carousel');
        const content1 = document.getElementById("content1");
        const blackPage = document.getElementById("blackPage" + targetNum);
        const contentArea = document.getElementById("contentArea" + targetNum);
        const backImage = document.getElementById("backImage");
        backImage.className = "backImage";
        blackPage.style.visibility = "hidden";
        blackPage.style.opacity = "0";
        contentArea.style.marginTop = "50px";
        contentArea.style.opacity = "0";
        content1.style.opacity = "1";

        owl.trigger('stop.owl.autoplay');
        toggle = 0;
    }
    // clickBtn1.addEventListener("click", moveImage);
    // clickBtn2.addEventListener("click", moveImage);
    // clickBtn3.addEventListener("click", moveImage);
    // clickBtn4.addEventListener("click", moveImage);
    // clickBtn5.addEventListener("click", moveImage);
    // clickBtn6.addEventListener("click", moveImage);
    // clickBtn7.addEventListener("click", moveImage);
    // clickBtn8.addEventListener("click", moveImage);
    // clickBtn9.addEventListener("click", moveImage);
    // exitBtn.addEventListener("click", colseWindow);

    this.addEventListener("click", function (e) {
        const myOpenId = e.target.id;
        const clickNum = myOpenId[8];
        const myClose = e.target.id;
        const exitNum = myClose[7];
        switch (e.target.id) {
            case "clickBtn1":
                moveImage(clickNum);
                break;
            case "clickBtn2":
                moveImage(clickNum);
                break;
            case "clickBtn3":
                moveImage(clickNum);
                break;
            case "clickBtn4":
                moveImage(clickNum);
                break;
            case "clickBtn5":
                moveImage(clickNum);
                break;
            case "clickBtn6":
                moveImage(clickNum);
                break;
            case "clickBtn7":
                moveImage(clickNum);
                break;
            case "clickBtn8":
                moveImage(clickNum);
                break;
            case "clickBtn9":
                moveImage(clickNum);
                break;
            case "exitBtn1":
                colseWindow(exitNum);
                break;
            case "exitBtn2":
                colseWindow(exitNum);
                break;
            case "exitBtn3":
                colseWindow(exitNum);
                break;
            case "exitBtn4":
                colseWindow(exitNum);
                break;
            case "exitBtn5":
                colseWindow(exitNum);
                break;
            case "exitBtn6":
                colseWindow(exitNum);
                break;
            case "exitBtn7":
                colseWindow(exitNum);
                break;
            case "exitBtn8":
                colseWindow(exitNum);
                break;
            case "exitBtn9":
                colseWindow(exitNum);
                break
            // default:
            //     break;
        }
    })
}
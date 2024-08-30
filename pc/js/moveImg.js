function moveImgFun1() {
    const moveImg1 = document.getElementById("moveImg1");
    const moveImg2 = document.getElementById("moveImg2");
    const moveImg3 = document.getElementById("moveImg3");
    const moveImg4 = document.getElementById("moveImg4");
    const moveImg5 = document.getElementById("moveImg5");
    const moveImg6 = document.getElementById("moveImg6");
    const moveImg7 = document.getElementById("moveImg7");
    let moveLeft = [];
    let x = 0;
    let y = 0;
    while (x < 7) {
        const imgMove = document.getElementById("moveImg" + (x + 1));
        const imgWidth = imgMove.offsetWidth;
        x%2 == 0 && x!=0 && (y+=25);
        moveLeft.push(y);
        
        y += imgWidth;
        
        x++;
    }
    // moveImg1.style.left = x+"px";
    let i = 0;
    let moveInterval = setInterval (function(){
        const imgMove = document.getElementById("moveImg" + (i + 1));
        i == 0 && 
        (moveImg1.style.left = moveLeft[i] + "px") && 
        (moveImg2.style.left = moveLeft[i] + "px") &&
        (moveImg3.style.left = moveLeft[i] + "px") &&
        (moveImg4.style.left = moveLeft[i] + "px") &&
        (moveImg5.style.left = moveLeft[i] + "px") &&
        (moveImg6.style.left = moveLeft[i] + "px") &&
        (moveImg7.style.left = moveLeft[i] + "px");

        i == 1 && 
        // (moveImg1.style.left = moveLeft[i] + "px") && 
        (moveImg2.style.left = moveLeft[i] + "px") &&
        (moveImg3.style.left = moveLeft[i] + "px") &&
        (moveImg4.style.left = moveLeft[i] + "px") &&
        (moveImg5.style.left = moveLeft[i] + "px") &&
        (moveImg6.style.left = moveLeft[i] + "px") &&
        (moveImg7.style.left = moveLeft[i] + "px");

        i == 2 && 
        // (moveImg1.style.left = moveLeft[i] + "px") && 
        // (moveImg2.style.left = moveLeft[i] + "px") &&
        (moveImg3.style.left = moveLeft[i] + "px") &&
        (moveImg4.style.left = moveLeft[i] + "px") &&
        (moveImg5.style.left = moveLeft[i] + "px") &&
        (moveImg6.style.left = moveLeft[i] + "px") &&
        (moveImg7.style.left = moveLeft[i] + "px");

        i == 3 && 
        // (moveImg1.style.left = moveLeft[i] + "px") && 
        // (moveImg2.style.left = moveLeft[i] + "px") &&
        // (moveImg3.style.left = moveLeft[i] + "px") &&
        (moveImg4.style.left = moveLeft[i] + "px") &&
        (moveImg5.style.left = moveLeft[i] + "px") &&
        (moveImg6.style.left = moveLeft[i] + "px") &&
        (moveImg7.style.left = moveLeft[i] + "px");
        
        i == 4 && 
        // (moveImg1.style.left = moveLeft[i] + "px") && 
        // (moveImg2.style.left = moveLeft[i] + "px") &&
        // (moveImg3.style.left = moveLeft[i] + "px") &&
        // (moveImg4.style.left = moveLeft[i] + "px") &&
        (moveImg5.style.left = moveLeft[i] + "px") &&
        (moveImg6.style.left = moveLeft[i] + "px") &&
        (moveImg7.style.left = moveLeft[i] + "px");
        imgMove.style.opacity = 1;
        
        i == 5 && 
        // (moveImg1.style.left = moveLeft[i] + "px") && 
        // (moveImg2.style.left = moveLeft[i] + "px") &&
        // (moveImg3.style.left = moveLeft[i] + "px") &&
        // (moveImg4.style.left = moveLeft[i] + "px") &&
        // (moveImg5.style.left = moveLeft[i] + "px") &&
        (moveImg6.style.left = moveLeft[i] + "px") &&
        (moveImg7.style.left = moveLeft[i] + "px");

        i == 6 && 
        // (moveImg1.style.left = moveLeft[i] + "px") && 
        // (moveImg2.style.left = moveLeft[i] + "px") &&
        // (moveImg3.style.left = moveLeft[i] + "px") &&
        // (moveImg4.style.left = moveLeft[i] + "px") &&
        // (moveImg5.style.left = moveLeft[i] + "px") &&
        // (moveImg6.style.left = moveLeft[i] + "px") &&
        (moveImg7.style.left = moveLeft[i] + "px");
        
        imgMove.style.opacity = 1;
        i == 7&&(clearInterval(moveInterval));
        i++;
    },800);
}


function dragImgFun(){
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
    const blankBox1 = document.getElementById("blankBox1");
    const blankBox2 = document.getElementById("blankBox2");
    const blankBox3 = document.getElementById("blankBox3");
    const blankBox4 = document.getElementById("blankBox4");
    blankBox1.addEventListener("drop", drop);
    blankBox1.addEventListener("dragover", allowDrop);
    blankBox2.addEventListener("drop", drop);
    blankBox2.addEventListener("dragover", allowDrop);
    blankBox3.addEventListener("drop", drop);
    blankBox3.addEventListener("dragover", allowDrop);
    blankBox4.addEventListener("drop", drop);
    blankBox4.addEventListener("dragover", allowDrop);
    const content1 = document.getElementById("myContent1");
    const content2 = document.getElementById("myContent2");
    const content3 = document.getElementById("myContent3");
    const content4 = document.getElementById("myContent4");
    content1.draggable = "ture"
    content1.addEventListener("dragstart", drag);
    content2.draggable = "ture"
    content2.addEventListener("dragstart", drag);
    content3.draggable = "ture"
    content3.addEventListener("dragstart", drag);
    content4.draggable = "ture"
    content4.addEventListener("dragstart", drag);
}
window.addEventListener("load",dragImgFun);
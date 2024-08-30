function makeElement(element, attrId, attrClass) {
    const divElement = document.createElement(element);
    attrId && (divElement.id = attrId);
    attrClass && (divElement.className = attrClass);
    return divElement;
}
//엘리멘트, 아이디, 클래스 네임
//리턴 값 엘리멘트
//엘리멘트 기입 필수 
//클래스만 지정하고 싶다면 공백 문자열을 사용합니다.
function copyElement(element, bool) {
    let childBool;
    childBool = bool ? bool : false;
    return element.cloneNode(childBool);
}
//자식노드까지 복사하고 싶은 경우 ture
function menuFun() {
    function menuClick() {
        $("#menuArea").css({
            "visibility": "visible"
        });
    }

    function menuClose() {
        $("#menuArea").css({
            "visibility": "hidden"
        });
    }
    $("#menuClose").on("click", menuClose);
    $("#cilckMenu").on("click", menuClick);
} //메뉴 열고 닫기
window.addEventListener("load", menuFun);
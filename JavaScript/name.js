//addEventListener(이벤트, 함수)
document.addEventListener("DOMContentLoaded", (e) => {
    let nameEditButton = document.querySelector("#nameEditButton");
    let editName = document.querySelector("#editNameField");
    let newName = document.querySelector("#newName");
    let okButton = document.querySelector("#okButton");
    let nameHere = document.querySelector("#nameHere");

    nameEditButton.addEventListener("click",(e) => { //nameEditButton을 눌렀을 경우 이벤트를 화살표 함수로 작성
        editName.style.display = "block"; //editName의 경우 div때문에 이미 display 속성이 block이라서 inline을 사용하여도 아래로 나옴
        nameEditButton.style.display = "none"; //nameEditButton눌렸을시 nameEditButton의 display 값을 none으로 변경.
    })

    okButton.addEventListener("click", (e) => { //okButton을 눌렀을 경우 이벤트를 화살표 함수로 작성.
        nameHere.textContent = newName.value; //nameHere의 textContent를 newName의 value값으로 변경.
        editName.style.display = "none"; //okButton이 눌렸을 시 editName의 display를 none으로 변경
        nameEditButton.style.display = "inline"; //okButton이 눌렸을 시 nameEditButton을 활성화 **nameEditButton의 display 속성이 inline이라서 block 으로 할 경우 버튼 속성이 block이 되면서 버튼이 아래쪽으로 내려감
    }) 

})
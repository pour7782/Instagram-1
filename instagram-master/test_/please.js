document.addEventListener("DOMContentLoaded", function() {
    let id_input = document.querySelector("#id_input");
    let pw_input = document.querySelector("#pw_input");
    let name_input = document.querySelector("#name_input");
    let email_input = document.querySelector("#email_input");
    let button = document.querySelector("#button");
    let user__id = document.querySelector("#user__id");

    if(id_input > 'a' && id_input < 'z' | id_input > 'A' && id_input < 'Z'){
        user__id.textContent = "올바른 형식입니다"
    }else{
        alert("아이디는 소문자/숫자 4자 이상 사용 가능합니다");
    }

    console.log(id_input)
    
    // ㅗ
    

})
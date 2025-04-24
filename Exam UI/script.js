//html의 모든 요소가 로딩되었을 때 실행
//document : body를 의미하는 js 객체
//DOMContentLoaded : DOM(엘리먼트)이 모두 로딩 되었을 때 라는 이벤트 처리문
document.addEventListener("DOMContentLoaded", function(){

    //아이디에 대한 이벤트 처리

    //조건 검사 대상
    let usernameInput = document.querySelector("#id_input");
    //이벤트 처리 대상
    let message = document.querySelector("#id_message");

    //js표준 이벤트 종류

    //마우스 관련
    //click : 클릭했을 때
    //dbclick : 더블 클릭했을 때
    //mouseup : 마우스로 눌렀다 뗐을때
    //mousedown : 마우스로 눌렀을 때
    //mousemove : 요소 위에서 움직일 때
    //mouseenter : 요소로 처음 들어갔을 때
    //mouseleave : 요소 밖으로 나갔을 때
    //mouseover : 요소 위에 마우스가 올라갔을 때

    //키보드 관련
    //keydown : 키를 누를때
    //keypress : 키를 누르고 있을때
    //keyup : 키에서 손을 뗄때
    
    //포커스 관련
    //focus : 요소에 포커스가 들어갔을 때
    //blur : 요소에서 포커스가 빠졌을 때
    
    //폼 관련
    //submit : 폼이 제출될 때
    //change : <input>,<select><textarea>의 값이 바뀔 때(포커스가 빠졌을 때)
    //input : 사용자의 입력이 들어올 때
    //reset : 폼이 리셋될 때

    //윈도우 및 문서 관련 이벤트
    //load ; 문서나 리소스가 모두 로드 되었을 때
    //DOMContentLoaded : DOM이 모두 파싱되었을 때
    //resize : 창의 크기가 변경되었을 때
    //scroll : 스크롤 될 때
    //unload : 페이지를 벗어나기 직전
    //beforeunload : 페이지를 떠나기 전에 사용자에게 경고 가능


    //JS에서 조건식에 false로 판별하는 것들
    //false
    //0(숫자)
    //""(빈 문자열)
    //null
    //undefined
    //NaN(Not a Number)

    //usernameInput 변수에 값이 들어있다면
    if(usernameInput){
        //포커스를 줘라
        usernameInput.focus();
    }

    //아이디 입력란에 "입력" 이벤트가 발생했을 때
    usernameInput.addEventListener("input", function(){
        //아이디 입력란의 값 가져오기
        let value = usernameInput.value;

        let hasLowerCase = false;
        let hasNumber = false;
        let isValid = true;

        //길이 검사
        if(value.length < 4 || value.length > 20){
            isValid = false;
        }

        //문자 검사
        //정규식을 사용하지 않으면 문자열을 하나씩 잘라서 검사해야한다.

        //순회한다 -> 반복문(for, while)
        //ex) 묵음에서 하나씩 뽑아낸다

        //검사한다 -> 조건문(if, switch)
        //ex) 하나 뽑은게 소문자인지, 숫자인지 검사해야한다.

        //문자열 전체를 순회 한다.
        for(let i = 0; i < value.length; i++){
            const ch = value[i];//한글자를 ch에 담는다.
            if(ch >= 'a' && ch <= 'z'){//소문자인지 판별
                hasLowerCase = true;
            } else if(ch >= '0' && ch <= '9'){//숫자인지 판별
                hasNumber = true;
            } else{
                isValid = false;//다른 문자 포함시 무효
            }
            
        }
        //메시지를 표시
        //영어 소문자,숫자를 포함한 4글자 이상의 단어
        if(!isValid || !hasLowerCase || !hasNumber){//조건에 맞지 않는 경우지만 if
            message.textContent = "소문자/숫자 4자 이상을 입력해 주세요.";
            message.style.color = "red";
        } else{
            message.textContent = "올바른 형식입니다.";
            message.style.color = "green";
        }
        
    });

    //비밀번호
    //비밀번호 입력란
    let passwordInput = document.querySelector("#pw_input");
    //비밀번호 이벤트 처리 대상
    let passwordMessage = document.querySelector("#password_message");

    //이벤트 처리
    passwordInput.addEventListener("blur", function(){
        let value = passwordInput.value;

        if(value.length < 8 || value.length > 20){
            passwordMessage.textContent = "8~20자 사이로 작성해주세요";
            passwordMessage.style.color = 'red';
        }

        //대문자, 소문자, 숫자, 특수문자를 포함하는지 검증
        var passwordRegex1 = /^[A-Z]$/;
        var passwordRegex2 = /^[a-z]$/;
        var passwordRegex3 = /^[0-9]$/;
        var passwordRegex4 = /^[!@#$%^&*]$/;

        if(passwordRegex.test(value)){
            passwordMessage.textContent = "사용 가능한 비밀번호 입니다.";
            passwordMessage.style.color = "green";
        }else{
            passwordMessage.textContent = "비밀번호는 8 ~ 20자의 영문 대/소문자,숫자,특수문자 등 3 종류 이상으로 조합해주세요";
            passwordMessage.style.color = "red";
        }
        // let specialChars = "!@#$%^&*";

        // let hasLower = false; // 소문자가 들어갔는지
        // let hasUpper = false; //대문자가 들어갔는지
        // let hasNumber = false; //숫자가 들어갔는지
        // let hasSpecial = false; //특수문자가 들어갔는지
        // let isValid = true; //유효성검사가 완벽한지

        // if(value.length < 8 || value.length > 20){
        //     isValid = false;
        // }

        // for(let i = 0; i <value.length; i++){
        //     let ch = value[i];
        //     if(ch >= 'a' && ch <= 'z') hasLower = true;
        //     else if(ch >= 'A' && ch <= 'Z') hasUpper = true;
        //     else if(ch >= '0' && ch <= '9') hasNumber = true;
        //     else if(specialChars.includes(ch)) hasSpecial = true;
        //     else isValid = false;//허용되지 않은 문자 포함시 무효
        // }

        //포함된 조건 수 계산
        //조건에 맞는 문자가 들어가면 +1만 됨
        //최대 typesCount에 담길 수 있는 수는 4
        // let typesCount = 0;
        // if(hasLower) typesCount++;
        // if(hasUpper) typesCount++;
        // if(hasNumber) typesCount++;
        // if(hasSpecial) typesCount++;

        // //유효성 검사가 맞지 않을 때, 3종류 이상이 아닐 때
        // if(!isValid || typesCount < 3){
        //     passwordMessage.textContent = "비밀번호는 8 ~ 20자의 영문 대/소문자,숫자,특수문자 등 3 종류 이상으로 조합해주세요";
        //     passwordMessage.style.color = "red";
        // } else {
        //     passwordMessage.textContent = "사용 가능한 비밀번호 입니다.";
        //     passwordMessage.style.color = "green";
        // }
    });

    //이름
    let nameInput = document.querySelector("#name_input");
    let nameMessage = document.querySelector("#name_message");

    //이름에 대한 유효성 검증을 하는 함수
    function validateName(){
        //이름 값 가져오기
        let value = nameInput.value.trim();

        //1. 이름을 입력하지 않았을 때
        if(value.length === 0){
            nameMessage.textContent = "이름을 입력해 주세요";
            nameMessage.style.color = "red";
            return;
        }

        //2. 이름이 30글자가 넘었을 때.
        if(value.length > 30){
            nameMessage.textContent = "이름은 1~30자 사이로 입력해 주세요";
            nameMessage.style.color = "red";
            return;
        }

        //한글, 영문 대/소문자만 허용하는 정규식
        //한글 가-힣
        let nameRegex = /^[A-Za-z가-힣]+$/;
        if(nameRegex.test(value)){
            nameMessage.textContent = "사용 가능한 이름입니다.";
            nameMessage.style.color = "green";
        } else{
            nameMessage.textContent = "이름은 한글, 영문 대/소문자만 가능합니다.";
            nameMessage.style.color = "red";
        }

    }
    //입력할 때 실시간으로 검증
    nameInput.addEventListener("input",validateName);
    //포커스가 빠질 때 검증
    nameInput.addEventListener("blur",validateName);

    //이메일
    let emailInput = document.querySelector("#email_input");
    let emailMessage = document.querySelector("#email_message");

    function validateEmail(){
        let value = emailInput.value.trim();

        //1. 이메일을 입력하지 않았을 때
        //"이메일을 입력해 주세요"
        if(value.length === 0){
            emailMessage.textContent = "이메일을 입력해 주세요";
            emailMessage.style.color = "red";
            return;
        }

        //2.이메일 형식 검사하기
        //"이메일 형식이 올바르지 않습니다."
        let emailRegex = /^[A-Za-z\d.-]+\@[A-Za-z\d-]+\.(com|net)$/;
        if(emailRegex.test(value)){
            emailMessage.textContent = "올바른 이메일 입니다.";
            emailMessage.style.color = "green";
        } else {
            emailMessage.textContent = "이메일 형식이 올바르지 않습니다."
            emailMessage.style.color ="red";
        }
    }
    //입력할 때 실시간으로 검증
    emailInput.addEventListener("input",validateEmail);
    //포커스가 빠질 때 검증
    emailInput.addEventListener("blur",validateEmail);

    //가입완료 버튼
    let form = document.querySelector("#signup_btn");

    form.addEventListener("submit", function(event){
        //confirm 창을 띄운다
        let confirmed = confirm("가입을 완료하시겠습니까?")
        if(!confirmed){
            event.preventDefault();//form의 전송을 막는다.
        }
    })

})
document.addEventListener("DOMContentLoaded", (e) => {
    // 톱니바퀴 아이콘
    let configid = document.querySelector("#id_i");
    // id값이 들어있는 텍스트
    let idText = document.querySelector("#id span");

    // 톱니바퀴 아이콘을 눌렀을 떄
    configid.addEventListener("click", (e) => {
        idText.textContent = prompt("새로운 아이디를 입력하세요");
    })

    // 프로필 편집버튼
    let porfileEditButton = document.querySelector("#porfile_info button");
    // 이름
    let userInfo = document.querySelector("#userInfo")
    let summary = document.querySelector("#summary");
    // 사이트
    let profileDetail = document.querySelector("#frofileDetail")

    let change = false
    // 프로필 편집 버튼을 눌렀을 때
    profileDetail.addEventListener("click", (e) => {
        if(changeig){
            let _userInfo = userInfo.querySelector("input").value;
            let _summary = summary.querySelector("input").value;
            let _profileDetail = profileDetail.querySelector("input").value;

            userInfo.innerHTML = _userInfo
            summary.innerHTML = _summary

            if(profileDetail.startsWith("https")){
                _profileDetail = "<a href ="+ _profileDetail+ ">" + _profileDetail+ "</a>"

                profileDetail.innerHTML = _profileDetail

                // 버튼에 텍스트 수정
                e.target.textContent = "프로필 편집"
                change = false;
            }
        }else {
            // 현재 플로필에 있는 값을 변수에 담아놓는다.
            let _userInfo = userInfo.textContent
            let _summary = summary.textContent
            let _profileDetail = profileDetail.textContent

            // textContent : 문자열만 들어감(태그도 문자열 취급)
            // innerHTML : 태그는 태그로 작동함
            userInfo.innerHTML = "<input vslue =" +_userInfo+ ">"
            summary.innerHTML = "<input vslue =" +_summary+ ">"
            profileDetail.innerHTML = "<input vslue =" +_profileDetail+ ">"

            e.target.textContent = "프로필 편집 완료"
            change = true;
        }
    })

    //프로필 사진 바꾸기

    let porfile_pic = document.querySelector("#porfile_pic .circle_pic")

    porfile_pic.addEventListener("click", (e) => {
        e.target.style.filter = "grayscale(50)%";
    })

    porfile_pic.addEventListener("mouseleave", (e) => {
        e.target.style.filter = "grayscale(0)%";
    })

    porfile_pic.addEventListener("click", (e) => {
        porfile_pic.setAttribute("src", prompt("이미지 url을 입력해주세요"))
    })
})
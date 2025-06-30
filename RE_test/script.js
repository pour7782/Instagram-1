document.addEventListener("DOMContentLoaded", function() {
    const path = window.location.pathname
    
    // 개어렵노
    // 일단 넘어갔어 ㅎ....
    if (path.includes("login.html")) {
        const form = document.getElementById("login-form")
        const idInput = document.getElementById("id")
    
        if (idInput) idInput.focus()
    
        form?.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("로그인 시도 중입니다.")
            window.location.href = "board.html"
        })
    }
  
    if (path.includes("board.html")) {
        document.getElementById("logout-btn")?.addEventListener("click", () => {
            window.location.href = "login.html"
        })
    
        document.getElementById("edit-btn")?.addEventListener("click", () => {
            window.location.href = "personal_info.html"
        })
    }
  
    if (path.includes("personal_info.html")) {
        const form = document.getElementById("edit-form")
    
        form?.addEventListener("submit", (e) => {
            e.preventDefault()
            alert("수정 완료되었습니다.")
            window.location.href = "board.html"
        })
    }
})
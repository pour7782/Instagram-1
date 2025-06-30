document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm')
    const userIdInput = document.getElementById('userId')
    const userPwInput = document.getElementById('userPw')
    const userIdError = document.getElementById('userIdError')
    const userPwError = document.getElementById('userPwError')

    userIdInput.focus()

    function validateUserId() {
        const userId = userIdInput.value
        const regex = /^[a-z0-9]{4,20}$/

        if (!regex.test(userId)) {
            userIdError.textContent = '아이디는 소문자와 숫자 조합이 4~20자여야 합니다.'
            return false
        } else {
            userIdError.textContent = ''
            return true
        }
    }

    function validateUserPw() {
        const userPw = userPwInput.value
        const hasLowerCase = /[a-z]/.test(userPw)
        const hasUpperCase = /[A-Z]/.test(userPw)
        const hasNumber = /[0-9]/.test(userPw)
        const hasSpecialChar = /[!@#$%^&*]/.test(userPw)

        let typeCount = 0
        if (hasLowerCase) typeCount++
        if (hasUpperCase) typeCount++
        if (hasNumber) typeCount++
        if (hasSpecialChar) typeCount++

        if (userPw.length < 8 || userPw.length > 20 || typeCount < 3) {
            userPwError.textContent = '비밀번호는 8~20자이며 3종류 이상 포함 되어야 합니다'
            return false
        } else {
            userPwError.textContent = ''
            return true
        }
    }

    userIdInput.addEventListener('blur', validateUserId)
    userPwInput.addEventListener('blur', validateUserPw)

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault()

        const isUserIdValid = validateUserId()
        const isUserPwValid = validateUserPw()

        if (isUserIdValid && isUserPwValid) {
            if (confirm("로그인 하시겠습니까?")) {
                alert("로그인 완료")
            } else {

            }
        }
    })
})

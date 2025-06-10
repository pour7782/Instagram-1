// document.addEventListener(이벤트, 함수)
document.addEventListener("DOMContentLoaded", (e) => {
        let nameEditButton = document.querySelector('#name');
        let editName = document.querySelector('#editNameField');
        let newName = document.querySelector('#nameNew');
        let okButton = document.querySelector('okButton');
        let nameHere = document.querySelector('#nameHere');

        nameEditButton.addEventListener("click", (e) => {
            editName.style.display = "block";
            nameEditButton.style.display = "none";
        })
        nameEditButton.addEventListener("click", (e) => {
            nameHere.textContent = newName.value;
            editName.style.display = "none";
            nameEditButton.style.display = "inline";
        })
    }
)
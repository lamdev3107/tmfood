document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        const nameInput = document.querySelector('input[type="text"]');
        const phoneInput = document.querySelector('input[type="tel"]');

        if (nameInput.value.trim() === "" || phoneInput.value.trim() === "") {
            alert("Vui lòng nhập đầy đủ thông tin!"); 
            return;
        }

        document.querySelector(".container").style.transition = "opacity 0.5s ease-out";
        document.querySelector(".container").style.opacity = "0";

        setTimeout(() => {
            window.location.href = "trang_chu.html"; 
        }, 500);
    });
});

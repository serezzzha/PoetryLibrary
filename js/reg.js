const signInBtn = document.querySelector('.signin-btn');
const signUpBtn = document.querySelector('.signup-btn');
const formBox = document.querySelector('.form-box');
const body= document.body;

signUpBtn.addEventListener('click', function (){
    formBox.classList.add('active');
    body.classList.add('active');
});

signInBtn.addEventListener('click', function (){
    formBox.classList.remove('active');
    body.classList.remove('active');
});



document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Ваша проверка имени пользователя и пароля здесь (это просто заглушка)
    if (email === "admin@gmail.com" && password === "password") {
        var registration = prompt("Желаете пройти регистрацию на сайте? (Да/Нет)");

        if (registration && registration.toLowerCase() === "да") {
            alert("Круто!");
        } else {
            alert("Попробуй ещё раз");
        }
    } else {
        alert("Неверное имя пользователя или пароль. Попробуйте ещё раз.");
    }
});
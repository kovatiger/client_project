let signUp = document.querySelector('.sign-up')
let signUpForm = document.querySelector('.sign-up-form')
let signInForm = document.querySelector('.sign-in-form')
let signIn = document.querySelector('.sign-in')
let stripe = document.querySelector('.stripe')
let divIn = document.querySelector('.div-in')
let divUp = document.querySelector('.div-up')

let subBtn = document.querySelector('#submit-btn')
let subBtn2 = document.querySelector('#submit-btn2')
let log = document.querySelector('#log')
let pas = document.querySelector('#pas')
let log2 = document.querySelector('#log2')
let pas2 = document.querySelector('#pas2')
let tel = document.querySelector('#tel')


window.addEventListener('load', function () {

    signUp.addEventListener('click', () =>{
        signUpForm.style.display = 'block';
        signInForm.style.display = 'none';
        divIn.classList.toggle('stripe')
        divUp.classList.toggle('stripe')
    })
    signIn.addEventListener('click',() =>{
        signUpForm.style.display = 'none';
        signInForm.style.display = 'block';
        divIn.classList.toggle('stripe')
        divUp.classList.toggle('stripe')
    })

    //AUTHORIZATION
    function sendData () {
        //VALIDATION_AUTH
        function validationIn() {
            //login
            let log1 = log.value;
            if(/^[a-zA-Z1-9]+$/.test(log1) === false)
            {
                alert('В логине должны быть только латинские буквы'); return false;}
            else if(log1.length < 4 || log1.length > 20)
            {
                alert('В логине должен быть от 4 до 20 символов'); return false;}
            else if(parseInt(log1.substr(0, 1)))
            {
                alert('Логине должен начинаться с буквы'); return false;}
            else{
                alert('ok');
                return true;
            }

            //Password
            let pas1 = pas.value;
            const beginWithoutDigit = /^\D.*$/
            const withoutSpecialChars = /^[^-() /]*$/
            const containsLetters = /^.*[a-zA-Z]+.*$/

            if(beginWithoutDigit.test(pas1)){
                alert('Пароль не должен начинаться со спецсимволов'); return false;
            }
            else if (withoutSpecialChars.test(pas1)){
                alert('Пароль не должен состоять из символов'); return false;
            }
            else if (containsLetters.test(pas1)){
                alert('Пароль не должен состоять из кириллицы'); return false;
            }
            else if (pas1.length < 6 || pas1.length > 16){
                alert('В пароле должно быть от 6 до 16 символов'); return false;
            } else {
                alert('ok password');

            }
        }

        const XHR = new XMLHttpRequest();
        let data = JSON.stringify({
           "login":  log.value,
           "password": pas.value,
       })
        console.log(data)

        XHR.open('POST', 'http://localhost:8081/authorization', true);
        XHR.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
        XHR.send(data);

        XHR.addEventListener('load', function (event) {
            alert(event.target.responseText);
        });

        XHR.addEventListener('error', function (event) {
            alert("OOPS! SOMETHING WENT WRONG!");
        });
    }

    subBtn.addEventListener('submit', function (event) {
        event.preventDefault();
        sendData();
    });

    //REGISTRATION
    function sendDataUp () {
        const XHR2 = new XMLHttpRequest();

        let data2 = JSON.stringify({
            "login":  log2.value,
            "password": pas2.value,
            "tel": tel.value,
            // "password": pas2.value,
        })
        console.log(data2)

        XHR2.open('POST', 'http://localhost:8081/authorization', true);
        XHR2.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
        XHR2.send(data2);

        XHR2.addEventListener('load', function (event) {
            alert(event.target.responseText);
        });

        XHR2.addEventListener('error', function (event) {
            alert("OOPS! SOMETHING WENT WRONG!");
        });
    }


    subBtn2.addEventListener('submit', function (event) {
        event.preventDefault();
        sendDataUp();
    });
})



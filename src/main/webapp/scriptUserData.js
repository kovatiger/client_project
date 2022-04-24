const btnChange = document.querySelector('.change-btn')
const inputLogin = document.querySelector('.new-login')
const inputPas =document.querySelector('.new-password')
const inputTel = document.querySelector('.new-tel')
const login = document.querySelector('.login')
const password =document.querySelector('.password')
const tel = document.querySelector('.tel')

//ПОЛУЧЕНИЕ ДАННЫХ ДЛЯ СТРАНИЦЫ
const XHRUserData = new XMLHttpRequest();
let dataUser = JSON.stringify({
    "login": sessionStorage.getItem('login'),
})
XHRUserData.open('POST', 'http://localhost:8081/userPanel/personalInformation');
XHRUserData.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
XHRUserData.send(dataUser);
XHRUserData.onreadystatechange = function () {
    if (XHRUserData.readyState !== 4) {
        return
    }
    if (XHRUserData.status === 200) {
        let response = JSON.parse(XHRUserData.responseText)
        login.innerText = response.login;
        password.innerText = response.mobileNumber;
        tel.innerText = response.password;
    }
}

//Изменение личных данных
btnChange.addEventListener('click', (e) => {
    e.preventDefault()
    let log;
    let tel;
    let pas;
    if (inputLogin.value != '') {
        validationLogin();
        log = inputLogin.value;
    } else {
        log = login.innerText
    }
    if (inputTel.value != '') {
        validationTel();
        tel = inputTel.value;
    } else {
        tel = tel.innerText;
    }
    if (inputPas.value != '') {
        validationPassword();
        pas = inputPas.value;
    } else {
        pas = password.innerText;
    }
    const XHR = new XMLHttpRequest();
    let data = JSON.stringify({
        "oldLogin": sessionStorage.getItem('login'),
        "login": log,
        "mobileNumber": tel,
        "password": pas,
    })
    console.log(data)
    XHR.open('POST', 'http://localhost:8081/userPanel/updateUserInfo');
    XHR.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    XHR.send(data);
    XHR.onreadystatechange = function () {
        if (XHR.readyState !== 4) {
            return
        }
        if (XHR.status === 200) {
            sessionStorage.clear()
            sessionStorage.setItem("login", log)
            login.innerText = log;
            password.innerText = tel;
            tel.innerText = pas;
        }
    }
})

//ВАЛИДАЦИЯ
function validationLogin() {
    //login
    let logIn = inputLogin.value;
    if (/^[a-zA-Z1-9]+$/.test(logIn) === false) {
        inputLogin.classList.toggle('redInp')
        alert('Логин не должен содержать специальные символы, кириллицу!');
        return false;
    } else if (logIn.length < 4 || logIn.length > 20) {
        inputLogin.classList.toggle('redInp')
        alert('Длина логина должна быть > 4,  но < 20!');
        return false;
    } else if (parseInt(logIn.substr(0, 1))) {
        inputLogin.classList.toggle('redInp')
        alert('Логин должен начинаться с буквы!');
        return false;
    } else {
        inputLogin.classList.remove('redInp')
    }
}

function validationPassword(){
    let pasIn = inputPas.value;
    if (/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/.test(pasIn) === false) {
        alert('Пароль должен содержать более 6 символов: буквы верхнего и нижнего регистра, цифру')
        inputPas.classList.toggle('redInp')
    } else {
        inputPas.classList.remove('redInp')
        return true;
    }
}

function validationTel(){
    let telVal = inputTel.value;
    if (/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(telVal) === false) {
        alert('Enter a phone number like this: +375(29)1112233')
        inputTel.classList.toggle('redInp')
        return false;
    } else {
        inputTel.classList.remove('redInp')
        return true;
    }
}
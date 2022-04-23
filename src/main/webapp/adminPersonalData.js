let usersBtn = document.querySelector(".users")
let travelsBtn = document.querySelector('.travels')
let personalBtn = document.querySelector('.personal-data')
let changePersonalData = document.querySelector('.change-btn')
let btnExit = document.querySelector('#exit')
let inputLogin = document.querySelector('.new-login')
let inputTel = document.querySelector('.new-tel')
let inputPas = document.querySelector('.new-pas')

//ПОЛУЧЕНИЕ ДАННЫХ ДЛЯ СТРАНИЦЫ
const XHRAdminData = new XMLHttpRequest();
let dataAdmin = JSON.stringify({
    "login": sessionStorage.getItem('login'),
})
XHRAdminData.open('POST', 'http://localhost:8081/adminPanel/personalInformation');
XHRAdminData.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
XHRAdminData.send(dataAdmin);
XHRAdminData.onreadystatechange = function () {
    if (XHRAdminData.readyState !== 4) {
        return
    }
    if (XHRAdminData.status === 200) {
        let response = JSON.parse(XHRAdminData.responseText)
        inputLogin.closest('.old').querySelector('span').innerText = response.login;
        inputTel.closest('.old').querySelector('span').innerText = response.mobileNumber;
        inputPas.closest('.old').querySelector('span').innerText = response.password;
    }
}

//Изменение личных данных
changePersonalData.addEventListener('click', () => {
    let log;
    let tel;
    let pas;
    if (inputLogin.value != '') {
        validationLogin();
        log = inputLogin.value;
    } else {
        log = inputLogin.closest('.old').querySelector('span').innerText
    }
    if (inputTel.value != '') {
        validationTel();
        tel = inputTel.value;
    } else {
        tel = inputTel.closest('.old').querySelector('span').innerText
    }
    if (inputPas.value != '') {
        validationPassword();
        pas = inputPas.value;
    } else {
        pas = inputPas.closest('.old').querySelector('span').innerText
    }
    const XHR = new XMLHttpRequest();
    let data = JSON.stringify({
        "oldLogin": sessionStorage.getItem('login'),
        "login": log,
        "mobileNumber": tel,
        "password": pas,
    })
    console.log(data)
    XHR.open('POST', 'http://localhost:8081/adminPanel/updateAdminInfo');
    XHR.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    XHR.send(data);
    XHR.onreadystatechange = function () {
        if (XHR.readyState !== 4) {
            return
        }
        if (XHR.status === 200) {
            sessionStorage.clear()
            sessionStorage.setItem("login", log)
            inputLogin.closest('.old').querySelector('span').innerText = log;
            inputTel.closest('.old').querySelector('span').innerText = tel;
            inputPas.closest('.old').querySelector('span').innerText = pas;
        }
    }
})

//ВКЛАДКИ
usersBtn.addEventListener('click', () => {
    location.href = "http://localhost:8080/adminMenu/" + sessionStorage.getItem("login");
})
travelsBtn.addEventListener('click', () => {
    console.log(document.location.pathname)
    location.href = "http://localhost:8080/adminTravels/" + sessionStorage.getItem("login");
})
personalBtn.addEventListener('click', () => {
    location.href = "http://localhost:8080/adminPersonalData/" + sessionStorage.getItem("login");
})

//ВЫХОД
btnExit.addEventListener('click', () => {
    location.href = "http://localhost:8080/"
    sessionStorage.clear()
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
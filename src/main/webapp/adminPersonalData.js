let usersBtn = document.querySelector(".users")
let travelsBtn = document.querySelector('.travels')
let personalBtn = document.querySelector('.personal-data')
let changePersonalData = document.querySelector('.change-btn')
let btnExit = document.querySelector('#exit')

let personalLogin = document.querySelector('.my-login')
let personalFIO = document.querySelector('.my-FIO')
let personalTel = document.querySelector('.my-tel')
let personalPas = document.querySelector('.my-pass')

let inputNewLogin = document.querySelector('.new-login')
let inputNewFIO = document.querySelector('.new-FIO')
let inputNewTel = document.querySelector('.new-tel')
let inputNewPas = document.querySelector('.new-pas')

//вкладки
usersBtn.addEventListener('click',() =>{
    location.href="http://localhost:8080/adminMenu/" + sessionStorage.getItem("login");
})
travelsBtn.addEventListener('click',() =>{
    console.log(document.location.pathname)
    location.href="http://localhost:8080/adminTravels/" + sessionStorage.getItem("login");
})
personalBtn.addEventListener('click',() =>{
    location.href="http://localhost:8080/adminPersonalData/" + sessionStorage.getItem("login");
})

//Изменение личных данных
changePersonalData.addEventListener('click', () => {
    if(inputNewLogin.value.length > 0){
        personalLogin.innerText = inputNewLogin.value;
        inputNewLogin.value ='';
    }else if(inputNewFIO.value !=''){
        personalFIO.innerText = inputNewFIO.value;
        inputNewFIO.value ='';
    }else if(inputNewTel.value !=''){
        personalTel.innerText = inputNewTel.value;
        inputNewTel.value ='';
    }else if(inputNewPas.value !=''){
        personalPas.innerText = inputNewPas.value;
        inputNewPas.value ='';
    }
    else{
        alert('Введите изменённые данные в поле для ввода!')
    }
})

//ПОЛУЧЕНИЕ ДАННЫХ ДЛЯ СТРАНИЦЫ
let XHRGetUserData = new XMLHttpRequest();
let login = sessionStorage.getItem(login)
XHRGetUserData.open('GET', 'http://localhost:8081/allusers?'+login);
console.log(XHRGetUserData.responseType = 'text');

XHRGetUserData.onreadystatechange = function () {
    if (XHRGetUserData.readyState !== 4) {
        return
    }
    if (XHRGetUserData.status === 200) {
    //заполнение страницы
    }
}
XHRGetUserData.send();

//выход
btnExit.addEventListener('click', () => {
    location.href="http://localhost:8080/"
    sessionStorage.clear()
})
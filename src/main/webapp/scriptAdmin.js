let usersBtn = document.querySelector(".users")
let usersContent = document.querySelector('.users-content')
let travelsBtn = document.querySelector('.travels')
let travelsContent = document.querySelector('.travels-content')
let personalBtn = document.querySelector('.personal-data')
let personalDataContent = document.querySelector('.personal-data-content')
let userData = document.querySelector('.user-data')
let changePersonalData = document.querySelector('.change-btn')
let btnPersonalExit = document.querySelector('#exit')
let personalStatus =new Map();

let personalLogin = document.querySelector('.my-login')
let personalFIO = document.querySelector('.my-FIO')
let personalTel = document.querySelector('.my-tel')
let personalPas = document.querySelector('.my-pass')

let inputNewLogin = document.querySelector('.new-login')
let inputNewFIO = document.querySelector('.new-FIO')
let inputNewTel = document.querySelector('.new-tel')
let inputNewPas = document.querySelector('.new-pas')

//Вкладки
usersBtn.addEventListener('click',() =>{
    usersContent.style.display = 'block';
    travelsContent.style.display = 'none';
    personalDataContent.style.display = 'none';
})
travelsBtn.addEventListener('click',() =>{
    usersContent.style.display = 'none';
    travelsContent.style.display = 'block';
    personalDataContent.style.display = 'none';
})
personalBtn.addEventListener('click',() =>{
    usersContent.style.display = 'none';
    travelsContent.style.display = 'none';
    personalDataContent.style.display = 'block';
})
//Блокировка юзера
userData.addEventListener('click', (e) => {
    let status;
    if(e.target.classList.contains('red')){
        e.target.classList.add('green');
        e.target.classList.remove('red')
        e.target.innerHTML='Разблокировать'
        status = 'заблокирован'
    } else if(e.target.classList.contains('green')) {
        e.target.classList.add('red');
        e.target.classList.remove('green')
        e.target.innerHTML='Заблокировать'
        status = 'разаблокирован'
    }
    personalStatus.set(e.target.closest(".person-block").querySelector('.user-login').innerText, status );
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

btnPersonalExit.addEventListener('click',() =>{
    const XHRAdmin = new XMLHttpRequest();
    let dataAdmin = JSON.stringify({
        "login": personalLogin.innerText,
        "FIO": personalFIO.innerText,
        "tel": personalTel.innerText,
        "password": personalPas.innerText,
        // "userStatus": [personalStatus],
    })
    console.log(dataAdmin)

    XHRAdmin.open('POST', 'http://localhost:8081/Admin', true); //заменить
    XHRAdmin.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    XHRAdmin.send(dataAdmin);
// XHR.addEventListener('load', function (event) {
//    // console.log(event.target.responseText);
// });
    XHRAdmin.addEventListener('error', function (event) {
        alert("OOPS! SOMETHING WENT WRONG!");
    });
//PUT, DELETE ЗАПРОСЫ

//REQUEST
    XHRAdmin.onreadystatechange = function() {
        if (XHRAdmin.readyState !== 4) {
            return
        }
        if (XHRAdmin.status === 200) {
            location.href="http://localhost:8080/mainMenu/" + 1;
            console.log('good')
        } else {
            alert('Какая-то статуса!')
        }
    }
})

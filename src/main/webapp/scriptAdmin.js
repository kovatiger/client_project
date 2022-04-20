let usersBtn = document.querySelector(".users")
// let usersContent = document.querySelector('.users-content')
let travelsBtn = document.querySelector('.travels')
// let travelsContent = document.querySelector('.travels-content')
let personalBtn = document.querySelector('.personal-data')
// let personalDataContent = document.querySelector('.personal-data-content')
let userData = document.querySelector('.user-data')
let btnExit = document.querySelector('#exit')

//Вкладки
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

//выход
btnExit.addEventListener('click', () => {
    location.href="http://localhost:8080/"
    sessionStorage.clear()
})




// btnPersonalExit.addEventListener('click',() =>{
//     const XHRAdmin = new XMLHttpRequest();
//     let dataAdmin = JSON.stringify({
//         "login": personalLogin.innerText,
//         "FIO": personalFIO.innerText,
//         "tel": personalTel.innerText,
//         "password": personalPas.innerText,
//         // "userStatus": [personalStatus],
//     })
//     console.log(dataAdmin)
//
//     XHRAdmin.open('POST', 'http://localhost:8081/Admin', true); //заменить
//     XHRAdmin.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
//     XHRAdmin.send(dataAdmin);
// XHR.addEventListener('load', function (event) {
//    // console.log(event.target.responseText);
// });
//     XHRAdmin.addEventListener('error', function (event) {
//         alert("OOPS! SOMETHING WENT WRONG!");
//     });
//PUT, DELETE ЗАПРОСЫ

//REQUEST
//     XHRAdmin.onreadystatechange = function() {
//         if (XHRAdmin.readyState !== 4) {
//             return
//         }
//         if (XHRAdmin.status === 200) {
//             location.href="http://localhost:8080/adminMenu/" + 1;
//             console.log('good')
//         } else {
//             alert('Какая-то статуса!')
//         }
//     }
// })

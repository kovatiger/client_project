let tickets = JSON.parse(sessionStorage.tickets);
let amount = sessionStorage.getItem('amount');
let cityFrom = document.querySelector('.from');
let cityTo = document.querySelector('.to');
let date = document.querySelector('.date-time');
let count = document.querySelector('.count');
let resultTickets = document.querySelector('.result-tickets');
let btnPersonalInfo = document.querySelector('.personalInfo');
let btnTravels = document.querySelector('.travels');
let logo = document.querySelector('.logo');
let goExit = document.querySelector('.goExit')

//Заполнение страницы
let ticketsArr = JSON.parse(tickets);
let citiesWay = ticketsArr[0].way.split('-');
cityFrom.innerText = citiesWay[0];
cityTo.innerText = citiesWay[1];
date.innerText = ticketsArr[0].date;
count.innerText = sessionStorage.getItem('amount');

for(let i = 0; i < ticketsArr.length; i++){
    let resultBlock = document.createElement('div');
    resultBlock.classList.add('result-block');
    resultBlock.innerHTML=`
            <div class="res-town">${citiesWay[0]}</div>
            <img class="icon-size res-town" src="./pics/way.png">
            <div class="res-town">${citiesWay[1]}</div>
            <div class="res">${ticketsArr[i].date}</div>
            <div class="res timeFrom">${ticketsArr[i].time}</div>
            <div class="res ">Цена: <span class="price">${ticketsArr[i].price}</span> BYN</div>
            <div><button class="serve-btn">Забронировать</button></div>
    `
    resultTickets.append(resultBlock)
}

if (sessionStorage.getItem("login") == null) {
    goExit.innerText = 'Войти'
} else {
    goExit.innerText = 'Выйти'
}

//Личный кабинет
btnPersonalInfo.addEventListener('click', () => {
    if (sessionStorage.getItem("login") == null) {
        location.href = "http://localhost:8080/authorization";
    } else {
        location.href = `http://localhost:8080/userPanel/personalInformation/${user}`;
    }
})

//TRAVELS
btnTravels.addEventListener('click', () => {
    if (sessionStorage.getItem("login") == null) {
        location.href = "http://localhost:8080/authorization";
    } else {
        location.href = `http://localhost:8080/userPanel/travels/${user}`;
    }
})

//ATHORIZATION
goExit.addEventListener('click', () => {
    if (goExit.innerText == 'Войти') {
        location.href = "http://localhost:8080/authorization"
    } else {
        sessionStorage.clear();
        location.href = "http://localhost:8080/"
    }
})

//logo
logo.addEventListener('click', () => {
    if (sessionStorage.getItem("login") == null) {
        location.href = "http://localhost:8080/";
    } else {
        location.href = `http://localhost:8080/userPanel/travels/${user}`;
    }
})

//Бронирование
resultTickets.addEventListener('click', (e) => {
 if(e.target.classList.contains('serve-btn')) {
     if (sessionStorage.getItem("login") == null) {
         alert('Зарегистрируйтесь, чтобы иметь возможность забронировать билет!')
     } else {
         const XHR = new XMLHttpRequest();
         let time = e.target.closest('.result-block').querySelector('.timeFrom').innerText
         let price = e.target.closest('.result-block').querySelector('.price').innerText
         let data = JSON.stringify({
             "login": sessionStorage.getItem('login'),
             "way": ticketsArr[0].way,
             "time": time,
             "price": price,
             "date": ticketsArr[0].date,
             "place": sessionStorage.getItem('amount')
         })
         console.log(data)
         XHR.open('POST', 'http://localhost:8081/userPanel/order');
         XHR.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
         XHR.send(data);
         XHR.onreadystatechange = function () {
             if (XHRAdminData.readyState !== 4) {
                 return
             }
             if (XHRAdminData.status === 200) {
                 alert('Вы успешно забронировали рейс! Все билеты можно посмотреть во вкладке "Поездки"');
                 location.href = "http://localhost:8080";
             }
         }
     }
 }
 })


let cityFrom = document.querySelector('.city-from')
let cityTo = document.querySelector('.city-to')
let goExit = document.querySelector('.goExit')
let popularCityContainer = document.querySelector('.containers')
let user = sessionStorage.getItem('login')
let inputDate = document.querySelector('#date-input')
let inputPlace = document.querySelector('#input-count')
let selectCityFrom = document.querySelector('.city-from')
let selectCityTo = document.querySelector('.city-to')
let allcontainers = document.querySelectorAll('.container')

let btnSearch = document.querySelector('.search-btn')
let btnSignIn = document.querySelector('.signIn')
let btnTravels = document.querySelector('.travels')
let btnPersonalInfo = document.querySelector('.room')

//Заполнение страницы
if (sessionStorage.getItem("login") == null) {
    goExit.innerText = 'Войти'
} else {
    goExit.innerText = 'Выйти'
}

const XHRMenu = new XMLHttpRequest();
XHRMenu.open('GET', 'http://localhost:8081/findTrip');
XHRMenu.send();
XHRMenu.onreadystatechange = function () {
    if (XHRMenu.readyState !== 4) {
        return
    }
    if (XHRMenu.status === 200) {
        //популярные направления
        let cityArr = JSON.parse(XHRMenu.responseText);
        let citiesFrom = [];
        let citiesTo = [];
        for (let i = 0; i < allcontainers.length; i++) {
            let arr = cityArr[i].way.split('-');
            allcontainers[i].querySelector('.first').innerText = arr[0];
            allcontainers[i].querySelector('.second').innerText = arr[1];
            allcontainers[i].querySelector('.small-price').innerText = cityArr[i].price;
        }
        //заполнение селектов
        for (let i = 0; i < cityArr.length; i++){
            let arr = cityArr[i].way.split('-');
            if(!citiesFrom.includes(arr[0])){
                citiesFrom.push(arr[0])
            }
            if(!citiesTo.includes(arr[1])){
                citiesTo.push(arr[1])
            }
        }
       for (let i=0; i < citiesFrom.length; i++){
           let option = document.createElement('option');
           option.classList.add('where-city');
           option.innerText = citiesFrom[i];
           selectCityFrom.append(option)
       }
        for (let i=0; i < citiesTo.length; i++){
            let option = document.createElement('option');
            option.classList.add('where-city');
            option.innerText = citiesTo[i];
            selectCityTo.append(option)
        }
    }
}


//ограничение выбираемой даты
let today = new Date();
let dd = today.getDate();
let mm = today.getMonth() + 1; // Месяца идут с 0, так что добавляем 1.
let yyyy = today.getFullYear();
if (dd < 10) {
    dd = '0' + dd
}
if (mm < 10) {
    mm = '0' + mm
}
today = yyyy + '-' + mm + '-' + dd;
document.getElementById("date-input").setAttribute("min", today);

// Выбрать популярный рейс
popularCityContainer.addEventListener('click', (e) => {
    if (e.target !== popularCityContainer) {
        cityFrom.value = e.target.closest('.container').querySelector('.first').innerText;
        cityTo.value = e.target.closest('.container').querySelector('.second').innerText;
    }
})

//ATHORIZATION
btnSignIn.addEventListener('click', () => {
    if (goExit.innerText == 'Войти') {
        location.href = "http://localhost:8080/authorization"
    } else {
        sessionStorage.clear();
        location.href = "http://localhost:8080/"
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

//Личный кабинет
btnPersonalInfo.addEventListener('click', () => {
    if (sessionStorage.getItem("login") == null) {
        location.href = "http://localhost:8080/authorization";
    } else {
        location.href = `http://localhost:8080/userPanel/personalInformation/${user}`;
    }
})

//Найти рейс
btnSearch.addEventListener('click', (e) => {
    e.preventDefault()
    if (inputDate.value != '') {
        const XHRFindTickets = new XMLHttpRequest();
        let dateArr =  inputDate.value.split('-');
        let date = `${dateArr[2]}/${dateArr[1]}/${dateArr[0]}`
        let dataTicket = JSON.stringify({
            "way": `${selectCityFrom.value}-${selectCityTo.value}`,
            "date": `${date}`,
            "place": `${inputPlace.value}`,
        })
        sessionStorage.setItem('amount', inputPlace.value);
        XHRFindTickets.open('POST', 'http://localhost:8081/userPanel/findTicket');
        XHRFindTickets.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
        XHRFindTickets.send(dataTicket);
        XHRFindTickets.onreadystatechange = function () {
            if (XHRFindTickets.readyState !== 4) {
                return
            }
            if (XHRFindTickets.status === 200) {
                sessionStorage.setItem('tickets', JSON.stringify(XHRFindTickets.responseText));
                location.href = "http://localhost:8080/findTickets";
            }
        }
    } else {
        alert('Введите дату!')
    }
})
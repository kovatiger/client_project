let cityFrom = document.querySelector('.city-from')
let cityTo = document.querySelector('.city-to')

let btnSearch = document.querySelector('.search-btn')

let popularCityContainer = document.querySelector('.containers')
let cityContainer = document.querySelector('.container')

//ограничение выбираемой даты
let today = new Date();
let dd = today.getDate();
let mm = today.getMonth() + 1; // Месяца идут с 0, так что добавляем 1.
let yyyy = today.getFullYear();
if(dd < 10){
    dd='0' + dd
}
if(mm < 10){
    mm='0' + mm
}
today = yyyy + '-' + mm + '-' + dd;
document.getElementById("date-input").setAttribute("min", today);

// Выбрать популярный рейс
popularCityContainer.addEventListener('click', (e) => {
    if(e.target !== popularCityContainer){
        cityFrom.value = e.target.closest('.container').querySelector('.first').innerText;
        cityTo.value = e.target.closest('.container').querySelector('.second').innerText;
    }
})

//Найти рейс
btnSearch.addEventListener('click', ()=>{

})
let usersBtn = document.querySelector(".users")
let travelsBtn = document.querySelector('.travels')
let personalBtn = document.querySelector('.personal-data')
let btnExit = document.querySelector('#exit')

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

//выход
btnExit.addEventListener('click', () => {
    location.href="http://localhost:8080/"
    sessionStorage.clear()
})
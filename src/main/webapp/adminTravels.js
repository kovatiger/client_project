let usersBtn = document.querySelector(".users")
let travelsBtn = document.querySelector('.travels')
let personalBtn = document.querySelector('.personal-data')
let btnExit = document.querySelector('#exit')
let travelsData = document.querySelector('travels-data')

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

//Заполнение страницы
const XHRAdminPageTrav = new XMLHttpRequest();
XHRAdminPageTrav.open('GET', 'http://localhost:8081/adminPanel/travels');
XHRAdminPageTrav.send();

XHRAdminPageTrav.onreadystatechange = function () {
    if (XHRAdminPageTrav.readyState !== 4) {
        return
    }
    if (XHRAdminPageTrav.status === 200) {
        let travellsArr = JSON.parse(XHRAdminPage.responseText);
        for (let i = 0; i < travellsArr.length; i++){
            let travDiv = document.createElement('div');
            travDiv.classList.add('travels-block');
            let now = new Date();
            let date=new Date(1*travellsArr[i].date.substr(6),1*travellsArr[i].date.substr(3,2)-1,1*travellsArr[i].date.substr(0,2),0,0,0,0);
            if(now > date){
                travDiv.innerHTML=`
                <div class="travels-id">${travellsArr[i]+1}</div>
                <div class="travels-from">${travellsArr[i].fromCity}</div>
                <div class="travels-to">${travellsArr[i].toCity}</div>
                <div class="travels-date">${travellsArr[i].date}</div>
                <div class="travels-time">${travellsArr[i].time}</div>
                <div class="user-status">Не завершена</div>
                `
            } else {
                travDiv.innerHTML=`
                <div class="travels-id">${travellsArr[i]+1}</div>
                <div class="travels-from">${travellsArr[i].fromCity}</div>
                <div class="travels-to">${travellsArr[i].toCity}</div>
                <div class="travels-date">${travellsArr[i].date}</div>
                <div class="travels-time">${travellsArr[i].time}</div>
                <div class="user-status">Завершена</div>
                `
            }
            travelsData.append(travDiv)
            }
        }
}
//выход
btnExit.addEventListener('click', () => {
    location.href="http://localhost:8080/"
    sessionStorage.clear()
})
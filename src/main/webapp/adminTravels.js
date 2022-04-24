let usersBtn = document.querySelector(".users")
let travelsBtn = document.querySelector('.travels')
let personalBtn = document.querySelector('.personal-data')
let btnExit = document.querySelector('#exit')
let travelsData = document.querySelector('.travels-data')

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
        let server = JSON.parse(XHRAdminPageTrav.responseText);
        console.log(server)
        for (let i = 0; i < server.length; i++){
            let container = document.createElement('div');
            container.classList.add('travels-block');
            let now = new Date();
            let date=new Date(1*server[i].date.substr(6),1*server[i].date.substr(3,2)-1,1*server[i].date.substr(0,2),0,0,0,0);
            if(now > date){
                container.innerHTML=`
                <div class="travels-id">${i+1}</div>
                <div class="travels-from">${server[i].fromCity}</div>
                <div class="travels-to">${server[i].toCity}</div>
                <div class="travels-date">${server[i].date}</div>
                <div class="travels-time">${server[i].time}</div>
                <div class="user-status">Завершена</div>
                `
            } else {
                container.innerHTML=`
                <div class="travels-id">${i+1}</div>
                <div class="travels-from">${server[i].fromCity}</div>
                <div class="travels-to">${server[i].toCity}</div>
                <div class="travels-date">${server[i].date}</div>
                <div class="travels-time">${server[i].time}</div>
                <div class="user-status">Не завершена</div>
                `
            }
            console.log(travelsData)
            travelsData.append(container)
            }
        }
}
//выход
btnExit.addEventListener('click', () => {
    location.href="http://localhost:8080/"
    sessionStorage.clear()
})
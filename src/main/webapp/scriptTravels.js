let resultTickets = document.querySelector('.result-tickets');
//Заполнение страницы
const XHR = new XMLHttpRequest();
let data = JSON.stringify({
    "login": sessionStorage.getItem('login'),
})
XHR.open('POST', 'http://localhost:8081//userPanel/trips');
XHR.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
XHR.send(dataAdmin);
XHR.onreadystatechange = function () {
    if (XHR.readyState !== 4) {
        return
    }
    if (XHR.status === 200) {
        let trips = JSON.parse(XHR.responseText)
        for (let i = 0; i < trips.length; i++) {
            let now = new Date();
            let date = new Date(1 * trips[i].date.substr(6), 1 * trips[i].date.substr(3, 2) - 1, 1 * trips[i].date.substr(0, 2), 0, 0, 0, 0);
            let wayArr = trips[i].way.split('-');
            if (now > date) {
                let resultBlock = document.createElement('div');
                resultBlock.classList.add('result-block');
                resultBlock.innerHTML = `
            <div class="res-town">${wayArr[0]}</div>
            <img class="icon-size res-town" src="./pics/way.png" />
            <div class="res-town">${wayArr[1]}</div>
            <div class="res">${trips[i].date}</div>
            <div class="res">${trips[i].time}</div>
            <div class="res">Цена: <span class="price">${trips[i].price}</span> BYN</div>
            <div class="status green">Завершена</div>`
                resultTickets.append(resultBlock)
            } else {
                let resultBlock = document.createElement('div');
                resultBlock.classList.add('result-block');
                resultBlock.innerHTML = `
            <div class="res-town">${wayArr[0]}</div>
            <img class="icon-size res-town" src="./pics/way.png" />
            <div class="res-town">${wayArr[1]}</div>
            <div class="res">${trips[i].date}</div>
            <div class="res">${trips[i].time}</div>
            <div class="res">Цена: <span class="price">${trips[i].price}</span> BYN</div>
            <div class="status green">Не завершена</div>`
                resultTickets.append(resultBlock)
            }
        }
    }
}
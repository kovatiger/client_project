let usersBtn = document.querySelector(".users")
let travelsBtn = document.querySelector('.travels')
let personalBtn = document.querySelector('.personal-data')
let userData = document.querySelector('.user-data')
let btnExit = document.querySelector('#exit')

//Вкладки
usersBtn.addEventListener('click', () => {
    location.href = "http://localhost:8080/adminMenu/" + sessionStorage.getItem("login");
})
travelsBtn.addEventListener('click', () => {
    console.log(document.location.pathname)
    location.href = "http://localhost:8080/adminTravels/" + sessionStorage.getItem("login");
})
personalBtn.addEventListener('click', () => {
    location.href = "http://localhost:8080/adminPersonalData/" + sessionStorage.getItem("login");
})

//Запрос на заполнение страницы
const XHRAdminPage = new XMLHttpRequest();
XHRAdminPage.open('GET', 'http://localhost:8081/adminPanel/users');
XHRAdminPage.send();

XHRAdminPage.onreadystatechange = function () {
    if (XHRAdminPage.readyState !== 4) {
        return
    }
    if (XHRAdminPage.status === 200) {
        let usersArr = JSON.parse(XHRAdminPage.responseText);
        for (let i = 0; i < usersArr.length; i++) {

            let userDiv = document.createElement('div');
            userDiv.classList.add('person-block');
            if (usersArr[i].status == "ACTIVE") {
                userDiv.innerHTML = `
                <div class="user-id">${i + 1}</div>
                <div class="user-login">${usersArr[i].login}</div>
                <div class="user-tel">${usersArr[i].mobileNumber}</div>
                <div class="user-status">
                    <button class="red block-btn">Заблокировать</button>
                </div>
                `
            } else {
                userDiv.innerHTML = `
                <div class="user-id">${i + 1}</div>
                <div class="user-login">${usersArr[i].login}</div>
                <div class="user-tel">${usersArr[i].mobileNumber}</div>
                <div class="user-status">
                    <button class="green block-btn">Разблокировать</button>
                </div>
                `
            }
            userData.append(userDiv)
        }
    } else {
        alert('Какая-то статуса!')
    }
}

//Блокировка юзера
userData.addEventListener('click', (e) => {
        let dataBlock;
        const XHRBtnBlock = new XMLHttpRequest();
        if (e.target.classList.contains('red')) {
            dataBlock = JSON.stringify({
                "login": e.target.closest('.person-block').querySelector('.user-login').innerText,
                "status": "BLOCKED",
            })
            XHRBtnBlock.open('POST', 'http://localhost:8081/adminPanel/users'); //заменить
            XHRBtnBlock.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
            XHRBtnBlock.send(dataBlock);
            XHRBtnBlock.onreadystatechange = function () {
                if (XHRBtnBlock.readyState !== 4) {
                    return
                }
                if (XHRBtnBlock.status === 200) {
                    e.target.classList.add('green');
                    e.target.classList.remove('red')
                    e.target.innerHTML = 'Разблокировать'
                }
            }
        } else if (e.target.classList.contains('green')) {
            const XHRBtnBlock = new XMLHttpRequest();
            dataBlock = JSON.stringify({
                "login": e.target.closest('.person-block').querySelector('.user-login').innerText,
                "status": "ACTIVE",
            })
            XHRBtnBlock.open('POST', 'http://localhost:8081/adminPanel/users');
            XHRBtnBlock.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
            XHRBtnBlock.send(dataBlock);
            XHRBtnBlock.onreadystatechange = function () {
                if (XHRBtnBlock.readyState !== 4) {
                    return
                }
                if (XHRBtnBlock.status === 200) {
                    e.target.classList.add('red');
                    e.target.classList.remove('green')
                    e.target.innerHTML = 'Заблокировать'
                }
            }
        }
    })

//выход
    btnExit.addEventListener('click', () => {
        location.href = "http://localhost:8080/"
        sessionStorage.clear()
    })

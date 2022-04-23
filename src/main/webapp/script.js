let signUp = document.querySelector('.sign-up')
let signUpForm = document.querySelector('.sign-up-form')
let signInForm = document.querySelector('.sign-in-form')
let signIn = document.querySelector('.sign-in')
let stripe = document.querySelector('.stripe')
let divIn = document.querySelector('.div-in')
let divUp = document.querySelector('.div-up')
let log = document.querySelector('#log')
let pas = document.querySelector('#pas')
let logUp = document.querySelector('#logUp')
let pasUp = document.querySelector('#pasUp')
let tel = document.querySelector('#tel')
let repPas = document.querySelector('#repPas')

localStorage.setItem('login', 'login1')

signUp.addEventListener('click', () => {
    signUpForm.style.display = 'block';
    signInForm.style.display = 'none';
    divIn.classList.remove('stripe')
    divUp.classList.add('stripe')
})
signIn.addEventListener('click', () => {
    signUpForm.style.display = 'none';
    signInForm.style.display = 'block';
    divIn.classList.add('stripe')
    divUp.classList.remove('stripe')
})

const XHRUp = new XMLHttpRequest();

window.addEventListener('load', function () {
    //Authorization
    function sendData() {
        const XHR = new XMLHttpRequest();
        let data = JSON.stringify({
            "login": log.value,
            "password": pas.value,
        })

        XHR.open('POST', 'http://localhost:8081/authorization', true);
        XHR.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
        XHR.send(data);
        XHR.addEventListener('load', function (event) {
        });
        XHR.addEventListener('error', function (event) {
            alert("OOPS! SOMETHING WENT WRONG!");
        });

        //AUTHORIZATION REQUEST
        XHR.onreadystatechange = function () {
            if (XHR.readyState !== 4) {
                return
            }
            if (XHR.status === 200) {
                let responseText = JSON.parse(XHR.responseText)
                sessionStorage.setItem("login", responseText.login)
                if (responseText.status == "ACTIVE") {
                    switch (responseText.role) {
                        case "ADMIN":
                            location.href = "http://localhost:8080/adminMenu/" + responseText.login;
                            break;
                        case "USER":
                            location.href = "http://localhost:8080/userMenu/" + responseText.login; //СДЕЛАТЬ
                            break;
                    }
                } else {
                    alert('ERROR PAGE СДЕЛАТЬ')//!!!!!!!!!!!!!!!
                }
            } else {
                alert('Login or password is wrong!')
            }
        }
    }

//Registration
    function sendDataUp() {
        let log = document.querySelector('#logUp')
        let pas = document.querySelector('#pasUp')
        let tel = document.querySelector('#tel')
        let data = JSON.stringify({
            "login": log.value,
            "password": pas.value,
            "mobileNumber": tel.value,
        })
        XHRUp.open('POST', 'http://localhost:8081/registration', true);
        XHRUp.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
        XHRUp.send(data);
        XHRUp.addEventListener('load', function (event) {
            console.log(event.target.responseText);
        });
        XHRUp.addEventListener('error', function (event) {
            alert("OOPS! SOMETHING WENT WRONG!");
        });

        //REQUEST RESTRATION
        XHRUp.onreadystatechange = function () {
            if (XHRUp.readyState !== 4) {
                return
            }
            if (XHRUp.status === 200) {
                signUpForm.style.display = 'none';
                signInForm.style.display = 'block';
                divIn.classList.toggle('stripe');
                divUp.classList.toggle('stripe');
                form.reset();
                alert('you have successfully registered')
            } else {
                alert('This login already exists!')
            }
        }
    }

//SENDING FORM
    const form = document.querySelector('form')
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        if (divIn.classList.contains('stripe')) {
            sendData();
        } else if (divUp.classList.contains('stripe') && validationSignUp()) {
            sendDataUp();
        }
    });
})

//VALIDATIONLogin
// function validationSignIn() {
//     //login
//     let logIn = log.value;
//     if (/^[a-zA-Z1-9]+$/.test(logIn) === false) {
//         log.classList.toggle('redInp')
//         alert('Login must not contains special symbols, cirrilic letters');
//         return false;
//     } else if (logIn.length < 4 || logIn.length > 20) {
//         log.classList.toggle('redInp')
//         alert('Login must contains between 4 and 20 symbols');
//         return false;
//     } else if (parseInt(logIn.substr(0, 1))) {
//         log.classList.toggle('redInp')
//         alert('Login must start with a letter');
//         return false;
//     } else {
//         log.classList.remove('redInp')
//     }
//     //password
//     let pasIn = pas.value;
//     if (/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/.test(pasIn) === false) {
//         alert('Password must contains more than 6 symbols: lowercase and uppercase latin letters, numbers')
//         pas.classList.toggle('redInp')
//     } else {
//         pas.classList.remove('redInp')
//         return true;
//     }
// }

//validationRegistration
function validationSignUp() {
    //login
    let logUpVal = logUp.value;
    if (/^[a-zA-Z1-9]+$/.test(logUpVal) === false) {
        logUp.classList.toggle('redInp')
        alert('Login must not contains special symbols, cirrilic letters');
        return false;
    } else if (logUpVal.length < 4 || logUpVal.length > 20) {
        logUp.classList.toggle('redInp')
        alert('Login must contains between 4 and 20 symbols');
        return false;
    } else if (parseInt(logUpVal.substr(0, 1))) {
        logUp.classList.toggle('redInp')
        alert('Login must start with a letter');
        return false;
    } else {
        logUp.classList.remove('redInp')
    }
    //password
    let pasUpVal = pasUp.value;
    if (/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/.test(pasUpVal) === false) {
        alert('Password must contains more than 6 symbols: lowercase and uppercase latin letters, numbers')
        pasUp.classList.toggle('redInp')
        return false;
    } else {
        pasUp.classList.remove('redInp')
    }
    //reppassword
    let repeat = repPas.value;
    if (repeat != pasUpVal) {
        repPas.classList.toggle('redInp')
        alert('password must matchs')
        return false;
    } else {
        repPas.classList.remove('redInp')
    }
    //tel
    let telVal = tel.value;
    if (/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(telVal) === false) {
        alert('Enter a phone number like this: +375(29)1112233')
        tel.classList.toggle('redInp')
        return false;
    } else {
        tel.classList.remove('redInp')
        return true;
    }
}





let signUp = document.querySelector('.sign-up')
let signUpForm = document.querySelector('.sign-up-form')
let signInForm = document.querySelector('.sign-in-form')
let signIn = document.querySelector('.sign-in')
let stripe = document.querySelector('.stripe')
let divIn = document.querySelector('.div-in')
let divUp = document.querySelector('.div-up')
let subBtn = document.querySelector('#submit-btn')


signUp.addEventListener('click', () =>{
    console.log(signUpForm);

    signUpForm.style.display = 'block';
    signInForm.style.display = 'none';
    divIn.classList.toggle('stripe')
    divUp.classList.toggle('stripe')
})
signIn.addEventListener('click',() =>{
    signUpForm.style.display = 'none';
    signInForm.style.display = 'block';
    divIn.classList.toggle('stripe')
    divUp.classList.toggle('stripe')
})

// window.addEventListener('load', function () {
//     function sendData () {
//         const XHR = new XMLHttpRequest();
//
//         const FD = new FormData ( form );
//
//         XHR.addEventListener('load', function (event) {
//             alert(event.target.responseText);
//         });
//
//         XHR.addEventListener('error', function (event) {
//             alert("OOPS! SOMETHING WENT WRONG!");
//         });
//
//         XHR.open('POST', 'http://localhost:8081/authorization');
//
//         XHR.send(FD);
//     }
//
//     const form = document.querySelector('form')
//     form.addEventListener('submit', function (event) {
//         event.preventDefault();
//         sendData();
//     });
// })

subBtn.addEventListener('submit', function() {
    let XHR = new XMLHttpRequest();
    let url = 'http://localhost:8081/authorization';
    XHR.open('POST', url, true);
    XHR.setRequestHeader("Content-Type", "application/json");

    XHR.onreadystatechange = function () {
        if( XHR.readyState == 4 && XHR.status === 200){
            alert(XHR.responseText)
        }
    }

    let log = document.querySelector('#log')
    let pas = document.querySelector('#pas')
    let data = JSON.stringify({
        "login":  log.value,
        "password": pas.value,
    })
    console.log(data)
    XHR.send(data);
})
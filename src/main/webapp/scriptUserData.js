const btnOrder = document.querySelector('.order-btn')

// const inputName = document.querySelector('.new-name')
// const inputLastName =document.querySelector('.new-last-name')
// const inputPatronymic =document.querySelector('.new-patronymic')
// const inputTel = document.querySelector('.new-tel')
// const inputEmail =document.querySelector('.new-email')

const name = document.querySelector('.name')
const lastName =document.querySelector('.last-name')
const patronymic =document.querySelector('.patronymic')
const tel = document.querySelector('.tel')
const email =document.querySelector('.email')

let inputs = document.querySelectorAll('input')

btnOrder.addEventListener('click', (e) =>{
    e.preventDefault()
    for(let input of inputs){
        if(input.value !== ''){
            input.parentElement.querySelector('span').innerText = input.value;
            input.value = '';
        }
    }
})


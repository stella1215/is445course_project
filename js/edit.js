"use strict";

const urlParams = new URLSearchParams(window.location.search)
const number = parseInt(urlParams.get('id'))
const person = JSON.parse(window.localStorage.getItem(number))
const nameLocal = person.name
const emailLocal = person.email
const phoneLocal = person.phone

const submit = document.getElementById('submit')
const name = document.getElementById('name')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
submit.addEventListener('click', evaluate)

name.value = nameLocal
email.value = emailLocal
phone.value = phoneLocal

function evaluate() {
    if (!phone.checkValidity()) {
        alert('Your phone number has to be 10 digits and not started with 0 and 1')
    }
    if (!email.checkValidity()) {
        alert('Your email has to be in the format of username@server.domain')
    }
    if (phone.checkValidity() && email.checkValidity()) {
        window.localStorage.setItem(number, JSON.stringify({
            number,
            name: name.value,
            email: email.value,
            phone: phone.value
        }))
        window.location.replace(`details.html?id=${number}`)
    }
}
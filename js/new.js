"use strict";

const submit = document.getElementById('submit')
const name = document.getElementById('name')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
submit.addEventListener('click', () => {
    if (!phone.checkValidity()) {
        alert('Your phone number has to be 10 digits and not started with 0 and 1')
    }
    if (!email.checkValidity()) {
        alert('Your email has to be in the format of username@server.domain')
    }
    if (phone.checkValidity() && email.checkValidity()) {
        let number = window.localStorage.getItem('number')
        if (number === null) {
            number = 1
        } else {
            number++
        }
        window.localStorage.setItem(number, JSON.stringify({
            number,
            name: name.value,
            email: email.value,
            phone: phone.value
        }))
        window.localStorage.setItem('number', number)
        window.location.replace(`details.html?id=${number}`)
    }
})
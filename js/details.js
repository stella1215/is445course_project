"use strict";

const urlParams = new URLSearchParams(window.location.search)
const number = parseInt(urlParams.get('id'))
const person = JSON.parse(window.localStorage.getItem(number))
const {
    name,
    email,
    phone
} = person

document.getElementById('name').innerText = name
document.getElementById('email').innerText = email
document.getElementById('phone').innerText = phone

document.getElementById('edit').addEventListener('click', e => {
    window.location.replace(`edit.html?id=${number}`)
})

document.getElementById('delete').addEventListener('click', e => {
    if (confirm('Are you sure you want to delete this contact?')) {
        window.localStorage.removeItem(number)
        window.location.replace('index.html')
    } 
})
"use strict";

let keys = Object.keys(window.localStorage);
keys.splice(keys.indexOf("number"), 1);
keys.sort((a, b) => parseInt(a) - parseInt(b));
const tbody = document.getElementById("contacts");
for (let key of keys) {
  let person = JSON.parse(window.localStorage.getItem(key));
  let tr = document.createElement("tr");
  for (let key of ["number", "name", "email", "phone"]) {
    let td = document.createElement("td");
    td.innerText = person[key];
    tr.appendChild(td);
  }
  // TODO: Buttons
  let td = document.createElement("td");
  let btn = document.createElement("button");
  btn.innerText = "Details";
  btn.classList.add("btn", "green")
  btn.addEventListener('click', e => {
    window.location.replace(`details.html?id=${key}`)
  })
  td.appendChild(btn);

  btn = document.createElement("button");
  btn.innerText = "Edit";
  btn.classList.add("btn", "orange")
  btn.addEventListener('click', e => {
    window.location.replace(`edit.html?id=${key}`)
  })
  td.appendChild(btn);

  btn = document.createElement("button");
  btn.innerText = "Delete";
  btn.classList.add("btn", "red")
  btn.addEventListener('click', e => {
    if (confirm('Are you sure you want to delete this contact?')) {
      window.localStorage.removeItem(key)
      window.location.replace('index.html')
    }
  })
  td.appendChild(btn);

  tr.appendChild(td);

  tbody.appendChild(tr);
}
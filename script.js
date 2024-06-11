"use strict"

const submitButton = document.getElementById('submit');
const userId = document.getElementById('userId');
const title = document.getElementById('title');
const completed = document.getElementById('completed');

document.addEventListener('DOMContentLoaded', () => {
    
    submitButton.addEventListener('click', getData)

})

function getData(){
    const urlencoded = new URLSearchParams();
    urlencoded.append("userId", userId.value);
    urlencoded.append("title", title.value);
    urlencoded.append("completed", completed.value);

    const requestOptions = {
        method: "POST",
        body: urlencoded,
        redirect: "follow"
    };
    fetch('https://jsonplaceholder.typicode.com/todos', requestOptions)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((error) => console.error(error));
}
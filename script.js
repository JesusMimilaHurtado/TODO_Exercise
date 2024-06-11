"use strict"

const submitButton = document.getElementById('submit');
const userId = document.getElementById('userId');
const title = document.getElementById('title');
const completed = document.getElementById('completed');

document.addEventListener('DOMContentLoaded', () => {
    
    submitButton.addEventListener('click', getData)

})

function getData(){

    const urlencoded = new URLSearchParams(); // Its not needed, a normal JSON can work, but it can be helpfull for URL parameters
    console.log(urlencoded);
    urlencoded.append("userId", userId.value);
    urlencoded.append("title", title.value);
    urlencoded.append("completed", completed.value);

    // But you can also just generate a JSON Object

    // let urlenCodedObjct = {
    //     "userId": userId.value
    // }

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
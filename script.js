const JOKE_API_URL = "https://v2.jokeapi.dev/joke/Programming"

function getJoke() {
    fetch("https://v2.jokeapi.dev/joke/Programming")
        .then(response => response.json())
        .then(data => {
            const jokeText = data.joke ? data.joke : data.setup;
            const jokeElement = document.getElementById("joke").innerText = jokeText;
            jokeElement.innerHTML = `${data.setup} <br> ${data.delivery}`;
            console.log(data);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation', error);
        })
}
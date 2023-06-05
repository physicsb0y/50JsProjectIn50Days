const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokebtn');



generateJoke();

async function generateJoke () {
    // const config = {
    //     headers: {
    //         Accept: 'application/json',
    //     },
    // }
    
    const res = await fetch('https://icanhazdadjoke.com', {
        headers: {
            Accept: 'application/json',
        },
    })

    const data = await res.json()
    console.log(data);
    jokeEl.innerHTML = data.joke;
}

jokeBtn.addEventListener("click", generateJoke)

function refreshPage () {
    window.location.reload();
}

// function generateJoke () {

//     const config = {
//         headers: {
//             Accept: "application/json",
//         },
//     }

//     fetch("https://icanhazdadjoke.com", config)
//         .then(res => res.json())
//         .then(data => {
//             jokeEl.innerHTML = data.joke
//         })
// }
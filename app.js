const jokeEl = document.querySelector("#joke");
const jokeBtn = document.querySelector("#jokeBtn");
jokeBtn.addEventListener("click", generatejoke);
generatejoke();

async function generatejoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  const res = await fetch("https://icanhazdadjoke.com", config);
  const data = await res.json();
  jokeEl.innerText = data.joke;
}

// function generatejoke() {
//   const config = {
//     headers: {
//       Accept: "application/json",
//     },
//   };
//   fetch("https://icanhazdadjoke.com", config)
//     .then((res) => res.json())
//     .then((data) => {
//       jokeEl.innerText = data.joke;
//     });
// }

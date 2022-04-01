const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("joke-btn");

const generateJoke = () => {
	fetch("https://icanhazdadjoke.com/", {
		headers: {
			Accept: "application/json",
		},
	})
		.then((res) => res.json())
		.then((data) => (jokeEl.textContent = data.joke));
};

generateJoke();

jokeBtn.addEventListener("click", generateJoke);

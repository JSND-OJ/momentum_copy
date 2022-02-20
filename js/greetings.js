const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}




const setMax = document.getElementById("setmax");
const play = document.getElementById("play");
const announce = document.querySelector("#announce");
const result = document.querySelector("#result");
const guessInput = document.getElementById("yourguess");

let maxValue;
let maxValueForRNG;

setMax.addEventListener("submit", function (event) {
  event.preventDefault();
  maxValue = document.querySelector("#maxvalue").value;
  maxValueForRNG = parseInt(maxValue);
  guessInput.setAttribute("max", `${maxValue}`);
  console.log(maxValue);
  console.log(maxValueForRNG);
});

play.addEventListener("click", function (event) {
  event.preventDefault();
  const randomNumber = Math.floor(Math.random() * (maxValueForRNG + 1));
  console.log(randomNumber);
  yourGuess = document.querySelector("#yourguess").value;
  announce.innerText = `Your guess is ${yourGuess}.`;
  if (yourGuess === randomNumber) {
    result.innerText = "You won.";
  } else {
    result.innerText = "You won.";
  }
});
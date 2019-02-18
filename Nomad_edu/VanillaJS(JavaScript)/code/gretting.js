const greetingForm = document.querySelector(".js-greetingForm");
const greetingInput = greetingForm.querySelector("input");
const greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser";
const SHOWING_CN = "showing";
const HIDING_CN = "hiding";

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function paintGreeting(text) {
    greetingForm.classList.add(HIDING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello~~! ${text}`;
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = greetingInput.value;
    greetingForm.classList.add(HIDING_CN); 
    toDoForm.classList.remove(HIDING_CN);
    paintGreeting(currentValue);
    saveName(currentValue);
    document.querySelector(".js-toDoInput").focus();
}

function askForName() {
    greetingInput.focus();
    greetingForm.addEventListener("submit", handleSubmit);
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null) {
        askForName();
    }else {
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}

init();
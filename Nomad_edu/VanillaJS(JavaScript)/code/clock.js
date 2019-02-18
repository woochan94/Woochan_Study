const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime() {
    const date = new Date(); 
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();

    // 삼항연산자 사용한 분기처리 
    clockTitle.innerHTML = `${hours < 10 ? `0${hours}`:hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;

    // if(seconds < 10) {
    //     clockTitle.innerHTML = `${hours}:${minutes}:0${seconds}`;
    // } else {
    //     clockTitle.innerHTML = `${hours}:${minutes}:${seconds}`;
    // }
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");
const worldEl = document.getElementById("worldCup")


const worldCup = new Date(2026, 5, 11);

const timer = (date) => {
    const now = new Date();
    const timeDiff = date - now;

    const oneDay = 24 * 3600 * 1000;
    const days = Math.floor(timeDiff / oneDay);
    const hours = Math.floor(timeDiff / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(timeDiff / 1000 / 60) % 60;
    const seconds = Math.floor(timeDiff / 1000) % 60;

    console.log(days);
    worldEl.textContent = "2026.06.11"
    daysEl.textContent = days;
    hoursEl.textContent = String(hours).padStart(2, 0);
    minsEl.textContent = String(minutes).padStart(2, 0);
    secondsEl.textContent = String(seconds).padStart(2, 0);
}

timer(worldCup);

setInterval(() => {
    timer(worldCup);
},1000);
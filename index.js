const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");

function updateClock() {
    const currentDate = new Date();
    

    const second = currentDate.getSeconds();
    const minute = currentDate.getMinutes();
    const hour = currentDate.getHours();

    const secondDeg =(second / 60) * 360;
    const minuteDeg =(minute / 60) * 360;
    const hourDeg =(hour / 12) * 360;

    secondEl.style.transform = `rotate(${secondDeg}deg)`;
    minuteEl.style.transform = `rotate(${minuteDeg}deg)`;
    hourEl.style.transform = `rotate(${hourDeg}deg)`;


}

setInterval(updateClock, 1000);


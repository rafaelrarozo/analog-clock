const hoursEl   = document.querySelector('.hours');
const minutesEl = document.querySelector('.minutes');
const secondsEl = document.querySelector('.seconds');


function updateClock () {
    const currentDate = new Date()
    setTimeout(updateClock, 1000)
    const hours = currentDate.getHours()
    const minutes = currentDate.getMinutes()
    const seconds = currentDate.getSeconds()

    const hourDeg = (hours/12) * 360;
    hoursEl.style.transform = `rotate(${hourDeg}deg)`

    const minutesDeg = (minutes/60) * 360;
    minutesEl.style.transform = `rotate(${minutesDeg}deg)`

    const secondsDeg = (seconds/60) * 360;
    secondsEl.style.transform = `rotate(${secondsDeg}deg)`


    
}

updateClock();
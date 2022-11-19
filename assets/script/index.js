'use strict';

const display = document.getElementById('clock');
let alarmTime = 0;

function updateTime() {
    const date = new Date();

    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();



    display.innerText=`${hour} : ${minutes} : ${seconds}`
}


function setAlarmTime(value) {
    alarmTime = value;
}

setInterval(updateTime, 1000);
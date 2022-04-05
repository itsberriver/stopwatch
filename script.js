let seconds = 0;
let minutes = 0;
let hours = 0;
let interval;

const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

function printNumbers(time, idName) {
    if (time < 10) {
        time = "0" + time;
    }
    document.getElementById(idName).innerHTML = time;
}

function startTimer() {
    if (seconds < 59) {
        seconds++;
        
        printNumbers(seconds,'seconds');
    }
    if (seconds >= 59) {
        seconds = 0;
        minutes++;
        
        printNumbers(minutes,'minutes');
    }
    if (minutes >= 59) {
        minutes = 0;
        hours++;

        printNumbers(hours,'hours');
    }
}

startButton.addEventListener('click', function  () {
    startButton.innerHTML = 'RESUME';
    startButton.disabled = true;
    resetButton.disabled = false;
    interval = setInterval(startTimer, 1000);
});

resetButton.addEventListener('click', function () {
    clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    printNumbers(seconds,'seconds');
    printNumbers(minutes,'minutes');
    printNumbers(hours,'hours');
    startButton.innerHTML= 'START';
    startButton.disabled = false;
    resetButton.disabled = true;

});

stopButton.addEventListener('click', function () {   
    clearInterval(interval);
    startButton.disabled = false;
    resetButton.disabled = false;
    stopButton.disabled = true; 
    stopButton.disabled = false; 

});



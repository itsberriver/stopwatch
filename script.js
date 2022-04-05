let seconds = 0;
let minutes = 0;
let hours = 0;
let interval;

const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
/*const resumeButton = document.getElementById('resume');*/
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
    startButton.disabled = true;
    // pauseButton.disabled = false;
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
    startButton.disabled = false;
    // pauseButton.disabled = true;
    resetButton.disabled = true;
    // stopTimer();
});

// stopButton.addEventListener('click', function () {
//     stopTimer();
//     startButton.disabled = false;

// resumeButton.addEventListener ('click',);
// resetButton.addEventListener ('click',);

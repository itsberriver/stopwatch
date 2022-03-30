let seconds = 0;
let minutes = 0;
let hours = 0;



const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resumeButton = document.getElementById('resume');
const resetButton = document.getElementById('reset');



function startTimer() {
    if (seconds < 59) {
        seconds++;
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
    }
    if (seconds >= 59) {
        seconds = 0;
        minutes++;
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
    }
    if (minutes >= 59) {
        minutes = 0;
        hours++;
        if (hours < 10) {
            hours = "0" + hours;
        }
    }
    document.getElementById('timer').innerHTML = hours + ":" + minutes + ":" + seconds;
    setTimeout(startTimer, 1000);
}


startButton.addEventListener('click', function () {
    startTimer();
    startButton.disabled = true;
    pauseButton.disabled = false;
    resetButton.disabled = false;
});

resetButton.addEventListener('click', function () {
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById('timer').innerHTML = "00:00:00";
    startButton.disabled = false;
    pauseButton.disabled = true;
    resetButton.disabled = true;
    stopTimer();
});












// resumeButton.addEventListener ('click',);
// resetButton.addEventListener ('click',);















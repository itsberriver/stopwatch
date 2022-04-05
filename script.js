let seconds = 0;
let minutes = 0;
let hours = 0;

const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
/*const resumeButton = document.getElementById('resume');*/
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
    document.getElementById('seconds').innerHTML = seconds;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('hours').innerHTML = hours;

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
    // pauseButton.disabled = true;
    resetButton.disabled = true;
    stopTimer();
});

// stop.Button.addEventListener('click', function () {
//     stopTimer();
//     startButton.disabled = false;

// resumeButton.addEventListener ('click',);
// resetButton.addEventListener ('click',);
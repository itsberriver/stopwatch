let seconds = 0;
let minutes = 0;
let hours = 0;

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
        // if (seconds < 10) {
        //     seconds = "0" + seconds;
        // }
        printNumbers(seconds,'seconds');
    }
    if (seconds >= 59) {
        seconds = 0;
        minutes++;
        // if (minutes < 10) {
        //     minutes = "0" + minutes;
        // }
        printNumbers(minutes,'minutes');
    }
    if (minutes >= 59) {
        minutes = 0;
        hours++;
        // if (hours < 10) {
        //     hours = "0" + hours;
        // }
        printNumbers(hours,'hours');
    }
    // document.getElementById('seconds').innerHTML = seconds;
    // document.getElementById('minutes').innerHTML = minutes;
    // document.getElementById('hours').innerHTML = hours;

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
    printNumbers(seconds,'seconds');
    printNumbers(minutes,'minutes');
    printNumbers(hours,'hours');
    // document.getElementById('seconds').innerHTML = seconds;
    // document.getElementById('minutes').innerHTML = minutes;
    // document.getElementById('hours').innerHTML = hours;
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

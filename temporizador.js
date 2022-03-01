let seconds = 0;
let minutes = 0;
let hours = 0;

const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resumeButton = document.getElementById('resume');
const resetButton = document.getElementById('reset');

function startTimer(){
    
    seconds ++;

    if(seconds === 60){
        seconds = 0;
        minutes++;

        if (minutes === 60){
            minutes = 0;
            hours++;
        }
    }
    document.getElementById("timer").innerHTML = hours + ":" + minutes + ":" + seconds;
}

setInterval(startTimer,1000)





















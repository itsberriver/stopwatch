let seconds = 0;
let minutes = 0;
let hours = 0;


const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resumeButton = document.getElementById('resume');
const resetButton = document.getElementById('reset');

function start(){
    
    seconds ++;

    if(seconds === 60){
        seconds = 0;
        minutes++;

        if (minutes === 60){
            minutes = 0;
            hours++;
        }
    }

    if (seconds < 10){
        seconds = "0" + seconds.toString();
    }
    else{
        seconds = seconds;
    }

    /*if (minutes < 10){
        minutes = "0" + minutes.toString();
    else{
        minutes = minutes;
    }
    }*/



    document.getElementById("timer").innerHTML = hours + ":" + minutes + ":" + seconds;
}
setInterval(start,1000)




startButton.addEventListener ('click',start)
pauseButton.addEventListener ('click',reset)
resumeButton.addEventListener ('click',)
resetButton.addEventListener ('click',)















import { audio } from "./audio.js";

let result = document.getElementById('timer__result');
let startTimer = document.getElementById('startTimer');
startTimer.addEventListener('click', timer);
let stopTimer = document.getElementById('stopTimer');
stopTimer.addEventListener('click', stoptimer);

let count = 0;
let timerID;

export function timer(){
    count = parseInt(document.getElementById('inputTime').value);
    if (count != 0 && !isNaN(count)) {
        timerID = setInterval(() => {
            if (count == 0) {
                clearInterval(timerID);
                endWorkTimer();
            } else {
                --count;
                result.innerHTML = `Осталось :  ${count} секунд`;
            }
        
        }, 1000);
    } else {
        result.innerHTML = formatError("Необходимо ввести число больше нуля");
    }
}
    
  function stoptimer(){
    clearInterval(timerID);
}

function endWorkTimer(){
    result.innerHTML = `Таймер закончил работу!`;
    audio();
}
  

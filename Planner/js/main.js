import { diffDates, diffToHtml } from "./calcdate.js";
import { formatError } from "./utils.js"

const dateCalcForm = document.getElementById("datecalc");
const dateCalcResult = document.getElementById("datecalc__result");

dateCalcForm.addEventListener("submit", handleCalcDates);

function handleCalcDates(event) {
    dateCalcResult.innerHTML = "";
    event.preventDefault();
    
    let { firstDate, secondDate } = event.target.elements;
    firstDate = firstDate.value, secondDate = secondDate.value;
    if (firstDate && secondDate) {
        const diff = diffDates(firstDate, secondDate);
        dateCalcResult.innerHTML = diffToHtml(diff);
    }
    else {
        dateCalcResult.innerHTML = formatError("Для расчета необходимо заполнить оба поля");
    }   
}

let result = document.getElementById('timer__result');
let startTimer = document.getElementById('startTimer');
startTimer.addEventListener('click', timer);
let stopTimer = document.getElementById('stopTimer');
stopTimer.addEventListener('click', stoptimer)
let count = 0;
let timerID;
  function timer(){
      count = parseInt(document.getElementById('inputTime').value);
      if (count != 0 && !isNaN(count)) {
          timerID = setInterval(() => {
              if (count == 0) {
                  clearInterval(timerID)
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
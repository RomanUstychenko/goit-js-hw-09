import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const input = document.querySelector('#datetime-picker')
const btnStart = document.querySelector('button[data-start]')
const btnStop = document.querySelector('button[data-stop]')
let deadline = new Date();
input.addEventListener('click', flatpickr)
btnStart.addEventListener('click', interval)
btnStart.setAttribute('disabled', true)
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
      deadline = selectedDates[0];
      function validDate () {
        if (selectedDates[0] >= new Date()) {
            btnStart.removeAttribute('disabled', true)
        }
        else {
            window.alert("Please choose a date in the future")
        }
      }
      validDate ()
    },
  };
flatpickr('#datetime-picker', options)

const secondsTimer = document.querySelector('.value[data-seconds]');
const minutesTimer = document.querySelector('.value[data-minutes]');
const hoursTimer = document.querySelector('.value[data-hours]');
const daysTimer = document.querySelector('.value[data-days]');

var intervalID;
function interval () {
  intervalID = setInterval(convertMs, 1000)
    btnStart.setAttribute('disabled', true)
}

function convertMs (ms) {
    ms = deadline - new Date();
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = (Math.floor(ms / day)).toString().padStart(2, 0);
    const hours = (Math.floor((ms % day) / hour)).toString().padStart(2, 0);
    const minutes = (Math.floor(((ms % day) % hour) / minute)).toString().padStart(2, 0);
    const seconds = (Math.floor((((ms % day) % hour) % minute) / second)).toString().padStart(2, 0);

    secondsTimer.textContent = seconds;
    minutesTimer.textContent = minutes;
    hoursTimer.textContent = hours;
    daysTimer.textContent = days;
    intervalStop ()
}

function intervalStop () {
  if (secondsTimer.textContent === "00" && minutesTimer.textContent === "00" && hoursTimer.textContent === "00" && daysTimer.textContent === "00")
   {
    clearInterval(intervalID)
  }
}


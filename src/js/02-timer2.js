import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const input = document.querySelector('#datetime-picker')
const btnStart = document.querySelector('button[data-start]')
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
const nowDay = new Date();
const delta = (deadline - nowDay)
// const ms = new Date();
function interval () {
    setInterval(convertMs, 1000)
  
    console.log(delta)
}

function convertMs(ms) {
  const tooday = new Date();
  nowDay.textContent = tooday
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
   const hours = Math.floor((ms % day) / hour);
   const minutes = Math.floor(((ms % day) % hour) / minute);
   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    secondsTimer.textContent = seconds;
    minutesTimer.textContent = minutes;
    hoursTimer.textContent = hours;
    daysTimer.textContent = days;
    // console.log('sec', seconds)
    // console.log('min', minutes)
    // console.log('hours', hours)
    // console.log('days', days)
    // console.log(convertMs(deadline - nowDay))
    // console.log(deadline - tooday)
  return { days, hours, minutes, seconds };
 
}

// console.log(delta)






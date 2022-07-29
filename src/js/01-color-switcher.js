const btnStart = document.querySelector('button[data-start]')
const btnStop = document.querySelector('button[data-stop]')
const body = document.querySelector('body')
let timerId = null;

btnStop.setAttribute('disabled', true)

  btnStart.addEventListener('click', () => {
    timerId = setInterval(() => {
         body.style.backgroundColor = getRandomHexColor();
       }, 1000);
       btnStart.setAttribute('disabled', true)
       btnStop.removeAttribute('disabled', true)
   });

   btnStop.addEventListener("click", () => {
  clearInterval(timerId);
  btnStart.removeAttribute('disabled', true)
  btnStop.setAttribute('disabled', true)
});

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
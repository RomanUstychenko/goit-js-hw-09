import throttle from 'lodash.throttle';

const btnStart = document.querySelector('button[data-start]')
const btnStop = document.querySelector('button[data-stop]')
const body = document.querySelector('body')
console.log(btnStart)
console.log(btnStop)
console.log(body)
const timerId = null;

const onClick = () => {
   setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
      }, 1000);
      btnStart.setAttribute('disabled', true)
    
 
  };

  btnStart.addEventListener('click', throttle(onClick, 1000))

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

//   const startBtn = document.querySelector(".js-start");
// const stopBtn = document.querySelector(".js-stop");
// let timerId = null;

// startBtn.addEventListener("click", () => {
//   timerId = setInterval(() => {
//     console.log(`I love async JS!  ${Math.random()}`);
//   }, 1000);
// });


// stopBtn.addEventListener("click", () => {
//   clearInterval(timerId);
//   console.log(`Interval with id ${timerId} has stopped!`);
// });
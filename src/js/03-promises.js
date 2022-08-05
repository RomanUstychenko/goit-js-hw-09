const firstDelay = document.querySelector('input[name=delay]')
const delayStep = document.querySelector('input[name=step]')
const amount = document.querySelector('input[name=amount]')
const form = document.querySelector('form')
const btn = document.querySelector('button')
console.log(firstDelay)
console.log(delayStep)
console.log(amount)
console.log(form)
console.log(btn)
btn.addEventListener("submit", createPromise)
// const promise = new Promise (() => {})


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    console.log('hi')
    // Fulfill
  } else {
    // Reject
  }
}





// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });
let delay = document.querySelector('input[name=delay]')
let delayStep = document.querySelector('input[name=step]')
const position = document.querySelector('input[name=amount]')
const form = document.querySelector('form')
const btn = document.querySelector('button')

btn.addEventListener("submit", createPromise)


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
if (shouldResolve) {
    resolve({position, delay});    }
 else {      reject({position, delay});
 }  }, delay);  })
}

createPromise(2, 1500)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });


// function promiseCreator(counter) {
//   return new Promise((ok, failed) => {
//     let total = 0;

//     for (let i = 0; i < counter; i++) {
//       total += i;
//     }

//     // console.log(total);

//     if (total % 2 === 0) {
//       ok(total);
//     } else {
//       failed("Error");
//     }
//   });
// }
// promiseCreator(10)
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// promiseCreator(1001)
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

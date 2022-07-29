import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const input = document.querySelector('#datetime-picker')
const btnStart = document.querySelector('button[data-start]')

console.log(input)
console.log(btnStart)


input.addEventListener('click', flatpickr)
flatpickr("#datetime-picker", {});
  // Debounce & throttle 
const btnValue = document.querySelector(".incrementBtn");
const incrementValue = document.querySelector(".btnIncrement");
const customValue = document.querySelector(".btnThrottled");

let normalCount = 0;
let customCount = 0;



// Lodash debounce
const debounceCount = _.debounce(() => {
  customValue.innerHTML = ++customCount;

}, 800);


btnValue.addEventListener('click', () => {

  incrementValue.innerHTML = ++normalCount;
  debounceCount();
})


// Debounce Polyfill




// Lodash throttle
const throttleCount = _.throttle(() => {
  customValue.innerHTML = ++customCount;
}, 1600);


btnValue.addEventListener('click', () => {

  incrementValue.innerHTML = ++normalCount;
  throttleCount();
})


// Lodash polyfill

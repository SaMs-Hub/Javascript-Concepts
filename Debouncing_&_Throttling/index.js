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
const customDebounce = (cb, delay) => {
  let timer;

  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...args)
    }, delay)
  }
}

const debounceCount = customDebounce(() => {
  customValue.innerHTML = ++customCount;

}, 800);




// Lodash throttle
const throttleCount = _.throttle(() => {
  customValue.innerHTML = ++customCount;
}, 1600);


btnValue.addEventListener('click', () => {

  incrementValue.innerHTML = ++normalCount;
  throttleCount();
})


// Lodash polyfill
const customThrottle = (cb, delay) => {
  let last = 0;

  return function (...args) {
    let now = new Date().getTime();
    if (now - last < delay) return;
    last = now;
    return cb(...args);
  }
}

const throttleCount = customThrottle(() => {
  customValue.innerHTML = ++customCount;
}, 800);




// Q1. Guess output
let count = 0;
(function printCount(){
    if (count === 0){
        let count = 1;
        console.log(count);
    }
    console.log(count);
})()
// Output - 1
// 0


// Q2. Write a function for following 
// var multiply6 = createBase(6);
// multiply6(10);// returns 60
// multiply6(21);// returns 126
Ans: const createBase = (a) => {
    return (b) => {
        console.log(a * b);
    }
}

var multiply6 = createBase(6);
multiply6(21);
multiply6(10);
// Output - 126
//60


// Q3 - Optimize time take,
function find(index) {
    let a = [];
  for (let i = 0; i < 1000000; i++) { a[i]= i*i }

  console.log(a[index])
}
Ans: 
const find = (index) => {
    let arr = [];
    for (let i= 0; i < 1000000; i++){
        arr[i] = i * i;
    }
    return (index) => {
        console.log(arr[index]);
    }
}

// Q4 - SetTimout optimization
function a(){
    for (var i = 0; i < 3; i++){
       setTimeout(() => {
           console.log(i);
       }, i * 1000)
    }
}

a(); 
// gives 3, 3, 3
Ans:
function a(){
    for (var i = 0; i < 3; i++){
        const printOutput = (i) => {
           setTimeout(() => {
           console.log(i);
       }, i * 1000);
       }
         printOutput(i);
    }
}
a();
// gives 0, 1, 2


// Q5. Implement private counter
Ans: 
const counter = () => {
    let _counter = 0;
    
    const add = (num) => {
        _counter += num
    }
    
    const get = () => {
        return _counter;
    }
    
    return {add, get};
}

const getCounter = counter();
getCounter.add(4);
getCounter.add(41);
console.log(getCounter.get()); // gives 45


// Q6: Module Pattern
var Module = (function(){
    const private = (i) => {
        console.log("private:" + i);
        
    }
    
    return {
        public: (i) => {
            return private(i);
        }
    }
})()

Module.public(9); // gives private: 9
Module.private(9); // gives error

// Q7: Make it run once
Ans Approach1: let message;
const helloSam = () => {
    let count = 0;
    return () => {
        if (count > 0){
            return;
        }else{
             message = "Hello SaM;";
    console.log(message);
    count++;
        }
    }
   
}

const heySam = helloSam();
heySam(); // gives Hello SaM;
heySam();
heySam();

// More generic approach
const once = function(func, context){
    let ran;
    return function(){
        if (func){
            ran = func.apply(context, this);
            func = null;
        }
    }
    
    return ran;
}

const sam = once(() => console.log("Hello World"));

sam();
sam();
sam();


// Q8. Implement Memoization
function myMemo(func, context){
    let result = {};
    return function(...args){
        var argsCache = JSON.stringify(args);
        if (!result[argsCache]){
            result[argsCache] = func.call(context || this, ...args);
        }
        return result[argsCache];
    }
}

const getProduct = (a, b) => {
    for (let i = 0; i <= 100000000; i++){
        
    }
    return a * b;
}

const memoProduct = myMemo(getProduct)
console.time("1st call");
console.log(memoProduct(881, 983));
console.timeEnd("1st call");

console.time("2nd call");
console.log(memoProduct(881, 983));
console.timeEnd("2nd call");





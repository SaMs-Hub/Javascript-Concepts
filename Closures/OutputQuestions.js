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















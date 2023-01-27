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
const createBase = (a) => {
    return (b) => {
        console.log(a * b);
    }
}

var multiply6 = createBase(6);
multiply6(21);
multiply6(10);
// Output - 126
60






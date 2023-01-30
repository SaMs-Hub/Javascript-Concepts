// Q1. Output
console.log("started");

const p1 = new Promise((res, rej) => {
    console.log(1);
    res(2);
    console.log(3);  
})

p1.then((res) => {
    console.log(res);
})

console.log("ended"); // started, 1, 3, ended, 2

// Q2. Output
console.log("started");

const p1 = () => {
    return new Promise((res, rej) => {
        console.log(1);
        res(2);
        console.log(3);

    })
}

console.log("middle");

p1().then((res) => {
    console.log(res);
})

console.log("ended"); // started, middle, 1, 3, ended, 2

// Q3. Output
function job() {
    return new Promise(function (res, rej) {
        rej();
    })
}

let p1 = job();

p1
    .then(function () {
        console.log("success1")
    })
    .then(function () {
        console.log("success2")
    })
    .then(function () {
        console.log("success3")
    })
    .catch(function () {
        console.log("error1");
    })
    .then(function () {
        console.log("success 4");
    }) // Erro1, success 4

// Q4. 

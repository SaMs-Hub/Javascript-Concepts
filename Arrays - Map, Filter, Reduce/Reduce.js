
// Reduce can be used in many ways,
// Aggregation
const arr = [1, 2, 3, 4];

let sum = arr.reduce((pv, cv) => {
    const newValue = pv + cv;
    return newValue;
}, 0)

console.log(sum);


// Segregation - Can group elements together based on certain requirements
const arr = ['a', 'b', 'c', '*', 'd', '$'];


const isSpecial = (value) => {
    if (['$', '#', "*"].includes(value)) return "special";
    else return "normal"
}

const segregate = arr.reduce((pv, cv) => {
    const val = isSpecial(cv);
    if (!pv[val]) {
        pv[val] = [];
    }

    pv[val].push(cv);
    return pv;

}, {});

console.log(segregate);


// Can also be used to run things in sequence
const upperCase = (str) => {
    return str.toUpperCase();
}

const reverse = (str) => {
    return str.split('').reverse().join('');
}

const append = (str) => {
    return "Hello + " + str;
}

const arr = [append, reverse, upperCase];

const fV = arr.reduce((pv, cv) => {
    const newValue = cv(pv);
    console.log(`${cv}, ${newValue}`)
    return newValue
}, "sam");



// same with promises
const asyncTask = (time) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(`completed in ${time}`)
        }, 100 * time);
    })
}

const promises = [
    asyncTask(7),
    asyncTask(3),
    asyncTask(1),
]

const resPromises = (promises) => {
    promises.reduce((acc, curr) => {
        return acc.then(() => {
            return curr.then((val) => console.log(val))
        })
    }, Promise.resolve())
}

resPromises(promises);

// Polyfill




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


// 

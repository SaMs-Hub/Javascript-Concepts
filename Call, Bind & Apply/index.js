// Usage Inbuilt + Polyfill
let obj = {
    name: 'sam'
}

function sayHello(age) {
    return "hello " + this.name + " whose age is " + age;
}
// Call
console.log(sayHello.call(obj, 33)); // hello sam whose age is 33




// Call Polyfill



// Apply
console.log(sayHello.apply(obj, [33])); // hello sam whose age is 33



// Apply Polyfill


// Bind
const binded = sayHello.bind(obj);

console.log(binded(33)); // hello sam whose age is 33
console.log(binded(44)); // hello sam whose age is 44



// Bind Polyfill

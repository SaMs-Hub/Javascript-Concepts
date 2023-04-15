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
let obj = {
    name: 'sam',
}
function sayHello(age) {
    console.log("hello " + this.name + " whose age is " + age);
}
Function.prototype.customCall = function (context, ...args) {
    if (typeof this !== "function") throw new Error("not a function");
    context.fnRef = this;
    context.fnRef(...args);

}

// Apply
console.log(sayHello.apply(obj, [33])); // hello sam whose age is 33


// Apply Polyfill
Function.prototype.customApply = function (context = {}, args = []) {
    if (typeof this !== "function") throw new Error("not a function");
    if (!Array.isArray(args)) throw new Error("Provide array");
    context.fnRef = this;
    // spreading the contents of args array here
    context.fnRef(...args);

}
sayHello.customApply(obj, [33]); 


// Bind
const binded = sayHello.bind(obj);

console.log(binded(33)); // hello sam whose age is 33
console.log(binded(44)); // hello sam whose age is 44



// Bind Polyfill
Function.prototype.customBind = function (context = {}, ...args) {
    if (typeof this !== "function") throw new Error("not a function");

    context.fnRef = this;
    return function (...newArgs) {
        return context.fnRef(...args, ...newArgs);
    }

}

const bindFunc = sayHello.customBind(obj);
bindFunc(33);

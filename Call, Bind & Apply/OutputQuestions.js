// Q1.Output
let person = {
    name: 'sam'
}

function sayHello(age) {
    return "hello " + this.name + " whose age is " + age;
}


console.log(sayHello.call(person, 33)); // hello sam whose age is 33
console.log(sayHello.bind(person, 33)); // return function


// Q2. Output
const age = 10;

var person = {
    name: 'sam',
    age: 23,
    getAge: function () {
        return this.age;
    }
}

var p2 = { age: 24 };

console.log(person.getAge.call(p2)); // 24


// Q3. Output
var name = 'sam';

setTimeout(() => {
    const name = "mes";

    const data = {
        name: "mike",
        getName() {
            return this.name
        }


    };

    console.log(data.getName()); // mike
    console.log(data.getName.call(this)); // sam - as this points to the context the func is called in
})

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


// Q3. Output
const animals = [
    {
        name: 'tiger',
        age: 13,
    },
    {
        name: 'lion',
        age: 15,
    }
]

function printAnimals(i) {
    this.print = function () {
        console.log("#" + i + " " + this.name + " with " + this.age);
    }
    this.print();
}

printAnimals();
for (let i = 0; i < animals.length; i++) {
    printAnimals.call(animals[i], i) // #0 tiger with 13, #1 lion with 15

}

// Q4. Append two arrays
Ans:
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 7];

arr1.push.apply(arr1, arr2);

console.log(arr1); // [ 1, 2, 3, 4, 5, 7 ]

// Q5. Max & min
Ans:
const arr1 = [1, 2, 3, 4, 5, 7];

console.log(Math.max.apply(null, arr1)); // 7
console.log(Math.min.apply(null, arr1)); // 1


// Q5. Bound Output
    console.log(this);
}

let user = {
    g: f.bind(null),
}

user.g(); // refers to window obj


// Q6. Output
function f() {
    console.log(this.name);
}

f = f.bind({ name: "sam" }).bind({ name: "mes" });

f(); // sam - as bind is fixed, 

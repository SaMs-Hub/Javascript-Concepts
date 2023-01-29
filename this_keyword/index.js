// "this" keyword refers to an object based on the context its called in

// Normal func vs  arrow func
this.name = "user";
let user = {
    name: 'sam',
    getNormalName: function () {
        console.log(this.name);
    },
    getArrowName: () => {
        console.log(this.name);
    }
}

user.getNormalName(); //  sam - refers to immediate parent
user.getArrowName(); // user - refers to normal parent func 

// In class
class user {
    constructor(n) {
        this.name = n;
    }

    getName() {
        console.log(this.name);
    }
}

const User = new user("key");
User.getName(); // key


// Q1 - Output
const user = {
    fN: 'Sam',
    getName() {
        const fN = "mes";
        return this.fN;
    }
}

console.log(user.getName()); // Sam - as this points to obj to func itself 



// Q2 - Output Fix

function makeUser() {
    return {
        name: 'sam',
        ref: this,
    }
}

let user = makeUser();
console.log(user.ref.name); // undefined - this points to window
Fix:

function makeUser() {
    return {
        name: 'sam',
        ref() {
            return this;
        }
    }
}

let user = makeUser();
console.log(user.ref().name); // sam

// Q3. Settimeout fix
const user = {
    name: "sam",
    getName() {
        console.log(this.name);
    }
}

setTimeout(
    user.getName
    , 1000); // gives undefined - acts as a callback, refers to global window

Fix:
const user = {
    name: "sam",
    getName() {
        console.log(this.name);
    }
}

setTimeout(function () {
    user.getName()
}, 1000); // sam - since created as a funciton


// Q4. Implement calculator
const calculator = {
    read() {
        this.a = +prompt("enter a", 0);
        this.b = +prompt("enter b", 01);

    },

    sum() {
        return this.a + this.b;
    }
}

calculator.read();
console.log(calculator.sum());

// Q5. Output
var length = 4;
function cb() {
    console.log(this.length);
}

const obj = {
    length: 5,
    method(fN) {
        fN();
    }
}

cb(); // 4
obj.method(cb); // 4 - cb is called which refers to window obj

// Q6. Output
var length = 4;
function cb() {
    console.log(this.length);
}

const obj = {
    length: 5,
    method(fN) {
        console.log(arguments);
        arguments[0]();
    }
}

cb(); // 4
obj.method(cb, 3, 4); // 3 - Since arguments refer to the passed value(array) wich length prop


// Q7. Implement Calc
const calc = {
    total: 0,
    add(a) {
        this.total += a;
        return this;
    },
    subt(a) {
        this.total -= a;
        return this;
    },
    mul(a) {
        this.total *= a;
        return this;
    }
}

console.log(calc.add(3).mul(15).subt(3).total); // 42


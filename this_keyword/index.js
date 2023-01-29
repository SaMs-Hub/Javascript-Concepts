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

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

user.getNormalName(); // refers to immediate parent - sam
user.getArrowName(); // refers to normal parent func - user

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


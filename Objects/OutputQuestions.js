// Q1. Guess output
const a = {};
const b = { name: 'b' };
const c = { name: 'c' };

a[b] = 33;
a[c] = 49;
console.log(a[b]);

Ans: 49;

// Q2. Output
console.log([..."sam"]); // ['s', 'a', 'm']

// Q3. Output
let c = { name: "sam" };
let d;

d = c;
c.name = "mes";
console.log(d.name); // mes

// Q4. output
let c = { name: "sam" };
let d;

d = c;
c = "mes"
console.log(d, c); // { name: 'sam' } mes

 
// Q5. Output
const val = { number: 10 };

const mul = (x = { ...val }) => {
    console.log(x.number *= 2);
}

mul(); // 20
mul(); // 20
mul(val); // 20
mul(val); // 40


// Q6. Output
const changeRef = (person) => {
    person.age = 30;
    person = {
        name: 'sam',
        age: 50
    }

    return person;
}

const person1 = {
    name: 'mes',
    age: 25,
}

const person2 = changeRef(person1); // { name: 'mes', age: 30 } { name: 'sam', age: 50 }


// Q7. Cloning objects
const p1 = {
    name: 'sam',
    roll: 19
}

const p2 = p1; // attaches ref
const p3 = Object.assign({}, p1);
const p4 = JSON.parse(JSON.stringify(p1));
const p5 = { ...p1 };

p1.name = "mes";
console.log(p1, p2, p3, p4, p5);
//{ name: 'mes', roll: 19 } { name: 'mes', roll: 19 } { name: 'sam', roll: 19 } { name: 'sam', roll: 19 } { name: 'sam', roll: 19 }



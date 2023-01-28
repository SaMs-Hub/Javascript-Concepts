// Q1. Turn f(a,b) to f(a)(b)
Ans:
const curriedExample = (a) => {
    return (b) => {
        return `${a} ${b}`;
    }
}

console.log(curriedExample(3)(4)); // 3 4


// Q2. Implement sum(a)(b)(c)
Ans:
const sum = (a) => {
    return (b) => {
        return (c) => {
            return a + b + c;
        }
    }
}

console.log(sum(1)(3)(4)); // 8

// Q3. Infinite currying sum(a)(b)..()
Ans:
const add = (a) => {
    return (b) => {
        if (b) return add(a + b);
        return a;
    }
}

console.log(add(1)(3)(4)());




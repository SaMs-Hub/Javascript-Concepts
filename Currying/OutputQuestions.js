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

// Q4. Dom example
Ans:
const updateElement = (classValue) => {
    return (content) => {
        return element = document.querySelector("." + classValue).innerHTML = content;
    }
}

const manipulateEle = updateElement("some0");
manipulateEle('hey');


// Q5. Implement curry
Ans:
const curry = (func) => {
    return curriedFunc = (...arguments) => {
        if (arguments.length >= func.length) {
            return func(...arguments);
        } else {
            return (...next) => {
                return curriedFunc(...arguments, ...next);
            }
        }
    }
}

const sum = (a, b, c) => a + b + c;
console.log(sum(1, 2, 3)); // 6
const totalSum = curry(sum);
console.log(totalSum(1)(2)(3));  // 6

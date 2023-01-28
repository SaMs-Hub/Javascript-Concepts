// Q1. Turn f(a,b) to f(a)(b)
Ans:
const curriedExample = (a) => {
    return (b) => {
        return `${a} ${b}`;
    }
}

console.log(curriedExample(3)(4)); // 3 4



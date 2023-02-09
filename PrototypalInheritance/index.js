
let obj = {
    name: 'sam',
    city: 'hyderabad',
    getName: function(){
        return `${this.name} lives in ${this.city}`
    }
};


let obj2 = {
    name: 'mes',
}

// assigns properties of x object to y
obj2.__proto__ = obj;

console.log(obj.name); // sam
console.log(obj2.name); // mes
console.log(obj2.city); // hyderabad
console.log(obj.getName()); // sam lives in hyderabad
console.log(obj2.getName()); // mes lives in hyderabad

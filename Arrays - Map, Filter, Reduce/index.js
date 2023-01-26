/// Map ///
const arr = [1, 8, 9, 4];

// Map - Inbuilt
const newArr = arr.map((element, elementIndex, array) => {
    return element * 2;
})

// Map - Polyfill
Array.prototype.myMap = function (cbFunction) {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
        arr.push(cbFunction(this[i], i, this));
    }

    return arr;
}

const newArr = arr.myMap((element, elementIndex, array) => {
    return element * 2;
})

//output = [ 2, 16, 18, 8 ]


/// Filter ///
const arr = [1, 8, 9, 4];

// Fitler - Inbuilt
const newArr = arr.filter((element, elementIndex, array) => {
    return element > 2;
})

// Filter - Polyfill
Array.prototype.myFilter = function (cbFunction) {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
        if (cbFunction(this[i], i, this)) {
            arr.push(this[i]);
        }
    }
    return arr;
}

const newArr = arr.myFilter((element, elementIndex, array) => {
    return element > 2;
})

// output = [ 8, 9, 4] 






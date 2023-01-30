// callback hell
console.log("started");

const step1 = (v, cb) => {
    setTimeout(() => {
        return cb(v + " Sam ");
    }, 800);
}


const step2 = (v, cb) => {
    setTimeout(() => {
        return cb(v + " Mes ");
    }, 100);
}
const step3 = (v, cb) => {
    setTimeout(() => {
        return cb(v + " Kes ");
    }, 100);
}

const message = step1("hey", (act) => {
    console.log(act);
    step2("hi", (action) => console.log(action));
    step3("bye", (val) => console.log(val));
})


console.log("stopped");


// Promises hell

const step1 = (v) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(v + " Sam ");
        }, 800);
    })

}


const step2 = (v) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(v + " Mes ");
        }, 800);
    })
}
const step3 = (v) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(v + " Kes ");
        }, 800);
    });
}

step1("hi")
    .then((res) => {
        console.log(res);
        step2("hey")
            .then((res) => {
                console.log(res);
                step3("key")
                    .then((res) => {
                        console.log(res);
                    })
            })
    })
    .catch((err) => {
        console.log(err);
    })


// Promise chaining
step1("hi")
    .then((res) => {
        console.log(res);
        return step2("hey");
    }
    ).then((res) => {
        console.log(res);
        return step3("key");

    }).then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    })





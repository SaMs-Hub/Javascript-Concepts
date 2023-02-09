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


// Promise comb - all, race, any, allSettled
const firstFetch = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("THis is the first fetch");
        }, 800)
    })
}

const secondFetch = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("This is the second fetch");
        }, 400);
    })
}

const thirdFetch = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            rej("This promise rejected");
        }, 200);
    })
}

// All - return err even if 1 gets rejected
let data = Promise.all([
    firstFetch(), secondFetch(), thirdFetch()
]).then((res) => {
    console.log(res)
}).catch((err) => {
    console.error(err)
})

// All Settle - return all promises
let data = Promise.allSettled([
    firstFetch(), secondFetch(), thirdFetch()
]).then((res) => {
    console.log(res)
}).catch((err) => {
    console.error(err)
})


// Race - return first called promise( reject or  successdoes not matter)
let data = Promise.race([
    firstFetch(), secondFetch(), thirdFetch()
]).then((res) => {
    console.log(res)
}).catch((err) => {
    console.error(err)
})

// Any - return first called success promise
let data = Promise.any([
    firstFetch(), secondFetch(), thirdFetch()
]).then((res) => {
    console.log(res)
}).catch((err) => {
    console.error(err)
})


// async await  - optimized way
const handlePromise = async () => {
    try {
        const msg1 = await step1("hi");
        console.log(msg1);
        const msg2 = await step1("hey");
        console.log(msg2);
        const msg3 = await step1("ki");
        console.log(msg3);
    } catch (err) {
        console.log(err);
    }
};


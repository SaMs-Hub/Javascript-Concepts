// Promise all polyfill
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
            res(v + "Kes ");
        }, 800);
    });
}


Promise.customAll = (promises) => {
    return new Promise((resolve, reject) => {
        let results = [];

        if (!promises.length) {
            resolve(results);
            return;
        }

        let pending = promises.length;

        promises.forEach((p, index) => {
            Promise.resolve(p)
                .then((res) => {
                    results[index] = res;
                    pending--;

                    if (pending == 0) {
                        resolve(results);
                    }
                }, reject);
        })
    })
}

Promise.customAll([
    step1("hi"),
    step2("hey"),
    step3("key"),
]).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})


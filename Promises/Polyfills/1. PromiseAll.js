// Promise all polyfill - 1st Approach
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


// Approach 2
const doThis = (time) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (time < 3000) rej("rejected");
      else res(time);
    });
  });
};

const helloWorld = () => {
  return Promise.resolve("hello world");
};

const customPromiseAll = (taskArr) => {
  let results = [];
  let completedPromises = 0;
  return new Promise((res, rej) => {
    taskArr.forEach((pro, index) => {
      pro
        .then((val) => {
          results[index] = val;
          completedPromises += 1;

          if (completedPromises == taskArr.length) res(results);
        })
        .catch((err) => rej(err));
    });
  });
};

customPromiseAll([doThis(3000), doThis(4000), doThis(3000), helloWorld()])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));



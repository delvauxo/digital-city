const action = function () {
    return new Promise(
        (resolve, reject) => {
            setTimeout(() => resolve('OK'), 10000);
        }
    );
};

const start = async function () {
    console.log('AVANT');
    await action();
    console.log('APRES');
};

start();

// Making Promises.
// Exercice 1.
Promise.resolve(3)
    .then(value => {
        console.log(value);
    });


// Exercice 2.
Promise.reject('Boo')
    .catch(err => {
        console.log(err);
    });


// Exercice 3.
const makePromiseWithConstructor = function (itShouldResolve) {
    return new Promise((resolve, reject) => {
        if (itShouldResolve) {
            resolve('BON');
        } else {
            reject('PAS BON');
        }
    });
};

makePromiseWithConstructor(true)
    .then(value => {
        console.log(value);
    });


// Consuming Promises
// Exercice 1.
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('3secs later');
    }, 3000);
});

// https://github.com/lighthouse-labs/promises-exercises/tree/master/02-consuming-promises

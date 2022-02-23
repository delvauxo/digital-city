const { generateSalt, hash, generateKeys } = require('./utils/security');

const salt = generateSalt(12);
// const salt = 'de4f1dd677b9';
console.log(salt);

const pwd = 'metaforlife';

const hashed = hash(pwd, salt);
console.log(hashed);

const toCompare = hash(pwd, salt);
console.log(toCompare === hashed);

generateKeys()
    .then(obj => {
        console.log(obj.privateKey);
        console.log(obj.publicKey);
    }).catch(
        err => {
            // Code to execute in case of error.
        }
    );
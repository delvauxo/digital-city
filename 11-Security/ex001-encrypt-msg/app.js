const { generateSalt, hash, generateKeys } = require('./utils/security');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

let privateKey, publicKey;

// generateKeys()
//     .then(obj => {
//         privateKey = obj.privateKey;
//         publicKey = obj.publicKey;

//         const newFile = path.resolve('keys', 'pubk.txt');
//         console.log(`Le nouveau ficher est : '${newFile}'`);

//         const newFile2 = path.resolve('keys', 'prik.txt');
//         console.log(`Le nouveau ficher est : '${newFile2}'`);


//         // Création d'un fichier
//         fs.writeFile(newFile, publicKey, { flag: 'a' }, (error) => {
//             console.log('> Ecriture d\'un fichier (Async)');

//             if (error) {
//                 console.error(error);
//                 return;
//             }

//             console.log('Ecriture OK ♥');
//         });

//         // Création d'un fichier
//         fs.writeFile(newFile2, privateKey, { flag: 'a' }, (error) => {
//             console.log('> Ecriture d\'un fichier (Async)');

//             if (error) {
//                 console.error(error);
//                 return;
//             }

//             console.log('Ecriture OK ♥');
//         });

//     }).catch(
//         err => {
//             // Code to execute in case of error.
//         }
//     );

//
// ### ENCRYPT ###
//

// Creating a function to encrypt string
function encryptString(plaintext, publicKeyFile) {
    const publicKey = fs.readFileSync(publicKeyFile, "utf8");

    // publicEncrypt() method with its parameters
    const encrypted = crypto.publicEncrypt(
        publicKey, Buffer.from(plaintext));
    return encrypted.toString("base64");
}

// Defining a text to be encrypted
const plainText = "Mon pull n'est pas jaune !";
// Prints plain text
console.log("Plaintext:", plainText);

// Defining encrypted text
const encrypted = encryptString(plainText, "./keys/pubk.txt");
// Prints encrypted text
console.log("Encrypted: ", encrypted);


//
// ### DECRYPT ###
//

const secretData = `ADFwbXLDqtqMpm7SgYBcLlbAoFc/CR+cdNc0paEoUOBisbQ3yw+MjhuKn0SELU9vvo2LrwR+t2qA2ETsubl3Z9G3D+u0HSkguUXAECGp8bjO3MXldYFAEzv2EO/zsgkDR1Q/wXavN++si+VYBetm+/mzCllCZvFEMWY1ksDE3Y82jkDczNQoG4VfrxPrSfQdP6U/75bWENDJptXgn2AENfbVqCLDZ6BbGqqKHy574SjU2G5Kho0T4/tEy0vwtgrM8hC1DgzOJBXg3MgyfuM+RqoUxnxGROSQ0Sesdy/zNMHCPmZVGmw/h+Qf/Nq9JMoewiBHZ2nGDVx3CclXmNrCEA==`;

// Reading the Private key
const privK = fs.readFileSync('./keys/privateKey.txt').toString();
console.log(privK);

// Decrypting the text using public key
const origData = crypto.privateDecrypt(privK, Buffer.from(secretData, 'base64'));

// Printing the original content
console.log(origData.toString());


// MON MESSAGE

// PUBLIC KEY
// ENCRYPTER LES DATAS

// PRIVATE KEY
// DECRYPTER
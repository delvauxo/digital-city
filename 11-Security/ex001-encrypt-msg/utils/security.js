const crypto = require('crypto');

exports.generateKeys = () => {
    // la methode genrateKeys est asynchrone
    // et retournera une promesse
    // une promesse prend en paramètre 2 methodes
    return new Promise((resolve, reject) => {
        crypto.generateKeyPair(
            // type des clés
            'rsa', {
            // longueur de la clé privée
            modulusLength: 2048,
            publicKeyEncoding: {
                type: 'spki',
                format: 'pem'
            },
            privateKeyEncoding: {
                type: 'pkcs8',
                format: 'pem'
            },
        }, (err, publicKey, privateKey) => {
            // Dans le callback qui est exécuté
            // on appellera soit la methode resolve si tout est ok
            // soit la methode reject si l'operation a échoué 
            if (err) reject();
            else {
                resolve({
                    publicKey, privateKey
                });
            }
        });
    });

};
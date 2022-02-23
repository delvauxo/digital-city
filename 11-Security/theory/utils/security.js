const crypto = require('crypto');

/**
 * 
 * @param {*} count 
 * @returns A number of random hex chars.
 */
exports.generateSalt = (count) => {
    const bytes = crypto.randomBytes(Math.ceil(count / 2));
    return bytes.toString('hex').slice(0, count);
};


/**
 * 
 * @param {*} data 
 * @param {*} salt 
 * @returns A data hashed with a salty key.
 */
exports.hash = (data, salt) => {
    const hmac = new crypto.Hmac('sha512', salt);
    hmac.update(data);
    // Retour de l'empreinte.
    return hmac.digest('hex');
};


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
const http = require('http');
const path = require('path');
const { URL } = require('url');
const ejs = require('ejs');
const fs = require('fs');
const querystring = require('query-string');

// Liste de produit (Hardcodé / Cas pratique => Utilisation d'une DB!).
const products = [
    { id: 1, name: 'T-Shirt', desc: 'T-shirt My litle Poney', price: 20 },
    { id: 2, name: 'Pull', desc: 'Pull noir', price: 34.99 },
    { id: 3, name: 'Robe', desc: 'Robe classique', price: 42 },
    { id: 4, name: 'Robe longue', desc: 'Robe bleue ou dorée', price: 74.99 },
    { id: 5, name: 'Jean', desc: 'Jean Levis', price: 24.5 },
    { id: 6, name: 'Pantalon', desc: 'Super pantalon rose bonbon', price: 10 },
    { id: 7, name: 'Short', desc: 'Petit short bob sponge', price: 99.95 }
];
// Exercice => Créer 2 pages.
// "product"    : Affiche une page (la liste des produits [Nom + prix])
// "product/5"  : Affiche une page avec le détail du produit.

const sendServerResponse = (res, pageName, data = {}, code = 200) => {
    // Utilisation du moteur de template 'EJS'.
    const filename = path.resolve(__dirname, 'views', 'pages', pageName + '.ejs');
    ejs.renderFile(filename, data, function (err, pageRender) {
        if (err) {
            console.log(err);
            res.writeHead(500);
            res.end();
            return;
        }
        // Réponse du serveur.
        res.writeHead(code, { "Content-Type": "text/html" });
        res.write(pageRender);
        res.end();
    });
};

const publicFileExists = (targetFile) => {
    const filename = path.resolve(__dirname, 'public' + targetFile);
    if (fs.existsSync(filename)) {
        return fs.statSync(filename).isFile();
    }
    return false;
};

const sendFile = (res, targetFile) => {
    const filename = path.resolve(__dirname, 'public' + targetFile);
    fs.readFile(filename, (error, data) => {
        res.writeHead(200);
        res.end(data);
    });
};

const getBodyData = (req) => {
    // On s'assure que la requete est un POST.
    if (req.method !== 'POST') {
        return Promise.resolve(null);
    }

    return new Promise((resolve) => {
        // Event DATA: Permet de lire les données de la requête POST.
        let body = '';
        req.on('data', (postData) => {
            body += postData;
        });

        // Event END: Se déclenche quand toutes les données ont été traitées.
        req.on('end', () => {
            // console.log(body);
            // body => name=Olivier&email=delvauxo%40outlook.com&message=test
            // Réponse de type "application/x-www-form"
            const result = querystring.parse(body);
            resolve(result);
        });
    });
};

// Création du serveur.
const server = http.createServer((req, res) => {
    // Extraction des informations de l'url.
    const myUrl = new URL(req.url, 'http://' + req.headers.host);

    console.log(myUrl.pathname);
    // Systeme de routage (simple).
    // Les fichiers public.
    if (publicFileExists(myUrl.pathname)) {
        sendFile(res, myUrl.pathname);
    }
    // Page d'accueil.
    else if (req.method === 'GET' && /^\/(home\/?)?$/i.test(myUrl.pathname)) {
        const now = new Date();
        const today = now.toLocaleString('fr-be');
        sendServerResponse(res, 'home/index', { today });
    }
    // About.
    else if (req.method === 'GET' && myUrl.pathname.toLowerCase() === '/about') {
        sendServerResponse(res, 'home/about');
    }
    // Product.
    else if (req.method === 'GET' && myUrl.pathname.toLowerCase() === '/product') {
        sendServerResponse(res, 'product/index', { products });
    }
    // Product details.
    else if (req.method === 'GET' && myUrl.pathname.toLowerCase().startsWith('/product/')) {

        // Extraction de l'id produit passé en URL.
        let productId = myUrl.toString().split('/');
        productId = productId[productId.length - 1];

        // On s'assure que le product correspond a celui passé en URL.
        let product;
        for (const item of products) {
            if (item.id === parseInt(productId)) {
                product = item;
            }
        }

        // On s'assure que le product correspond a celui passé en URL.
        if (product) {
            sendServerResponse(res, 'product/details', { product });
        } else {
            sendServerResponse(res, 'error/404', 404);
        }
    }
    // Contact.
    else if (req.method === 'GET' && myUrl.pathname.toLowerCase() === '/contact') {
        sendServerResponse(res, 'contact/index');
    }
    else if (req.method === 'POST' && myUrl.pathname.toLowerCase() === '/contact') {
        getBodyData(req)
            .then((data) => {
                sendServerResponse(res, 'contact/response', { name: data.name });
            });
    }
    // Error.
    else {
        sendServerResponse(res, 'error/404', 404);
    }
});

// Lancement du serveur.
server.listen(7000, () => {
    console.log('Serveur is running.');
});
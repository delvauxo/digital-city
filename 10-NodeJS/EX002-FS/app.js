const fs = require('fs');
const path = require('path');

// Création du "filename" via le module 'path' de NodeJS
const filename = path.resolve('data', 'todo-list.txt');
console.log(`Le ficher est dispo sur : '${filename}'`);

const newFile = path.resolve('data', 'exemple.txt');
console.log(`Le nouveau ficher est : '${newFile}'`);

// Demo de la création d'un fichier
const data = 'Zaza Vanderquack\n';
fs.writeFile(newFile, data, { flag: 'a' }, (error) => {
    console.log('> Ecriture d\'un fichier (Async)');

    if (error) {
        console.error(error);
        return;
    }

    console.log('Ecriture OK ♥');
});

// Lecture du contenu du fichier via le module 'fs' (Async)
fs.readFile(filename, (error, data) => {
    console.log('> Lecture du fichier (Async)');

    if (error) {
        console.error(error);
        return;
    }

    console.log('\nLe contenu "brute" du fichier est : ');
    console.log(data);                   // Les données sous forme de buffer

    console.log('\nLe contenu "texte" du fichier est : ');
    console.log(data.toString('utf-8')); // Convertion sous forme de texte
});

// Obtenir les informations d'un element
fs.stat(filename, (error, stats) => {
    console.log('> Obtenir les metadatas d\'un fichier');

    if (error) {
        console.error(error);
        return;
    }

    console.log('L\'objet « stats »');
    console.log(stats);

    console.log('L\'element est fichier ou un dossier ?');
    if (stats.isFile()) {
        console.log('C\'est un fichier');
    }
    else if (stats.isDirectory()) {
        console.log('C\'est un repertoire');
    }
    console.log('\n');
});

// Utilisation des flux
fs.open(filename, 'r+', (error, fd) => {

    const fileSize = fs.statSync(filename).size;

    for (let position = 0; position < fileSize; position += 10) {
        const buffer = Buffer.alloc(10);

        // Les lectures sont asynchrone !
        fs.readSync(fd, buffer, 0, buffer.length, position, (error, bytes) => {

            if (error) {
                console.error();
                return;
            }

            console.log(`Nombre de bytes lu : ${bytes}`);

            if (bytes > 0) {
                const data = buffer.slice(0, bytes);
                console.log(data.toString('utf-8'));
            }
        });
    }
});

// Lecture d'un fichier JSON (Sans utiliser "require")
fs.readFile('./data/data.json', (error, data) => {

    const dataText = data.toString('utf-8');
    console.log(dataText);

    const dataJson = JSON.parse(dataText);
    console.log(dataJson);

    console.log('');
});
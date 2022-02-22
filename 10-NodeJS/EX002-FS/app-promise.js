const fs = require('fs/promises');
const path = require('path');

// Création du "filename" via le module 'path' de NodeJS
const filename = path.resolve('data', 'todo-list.txt');
console.log(`Le ficher est dispo sur : '${filename}'`);

// Utilisation des flux
const demoPromiseFile = async () => {

    const fileHandle = await fs.open(filename, 'r+');

    const fileSize = (await fileHandle.stat()).size;

    for (let position = 0; position < fileSize; position += 10) {

        const buffer = Buffer.alloc(10);

        // Les lectures sont asynchrone !
        const data = await fileHandle.read(buffer, 0, buffer.length, position);

        console.log(`Nombre de bytes lu : ${data.buffer.length}`);
        console.log(data.buffer.toString('utf-8'));
    };
};
demoPromiseFile();

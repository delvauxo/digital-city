const http = require('http')
const fs = require('fs')

const server = http.createServer()

server.on('request', (request, response) => {
    
    fs.readFile('index.html', (err, data) => {
        if (err) {
            response.writeHead(404)
            response.end("Ce fichier n'existe pas !")
        } else {
            response.writeHead(200, {
                'Content-Type': 'text/html; charset=utf-8'
            })
            response.end(data)
        }
    })

    console.log('Il y a eu une requete !')

})

server.listen(8080)
const porta = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express();

/*Parser requisição (interpretart submissão formulário) */
//medware
server.use(bodyParser.urlencoded({extended: true}))
/*Verifica se é json, transforma em objeto para ser usado */
//medware
server.use(bodyParser.json())

server.listen(porta, function(){
    console.log('Backend is running on port '+porta)
})

module.exports = server
const express = require('express')

module.exports = function(server){

    const rota = express.Router()
    server.use('/api', rota)

    const cicloService = require('../api/ciclo/cicloService')
    cicloService.register(rota, '/ciclos')

    const cicloSumarioService = require('../api/cicloSumario/cicloSumarioService')
    rota.route('/cicloSummary').get(cicloSumarioService.getSummary)
}
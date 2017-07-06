const ciclo = require('./ciclo')
const _ = require('lodash')

ciclo.methods(['get', 'post', 'put', 'delete'])
ciclo.updateOptions({new: true, runValidators: true})

module.exports = ciclo
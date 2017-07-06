const ciclo = require('./ciclo')
const _ = require('lodash')

ciclo.methods(['get', 'post', 'put', 'delete'])
ciclo.updateOptions({new: true, runValidators: true})

ciclo.after('post', sendErrorsOrNext).after('put', sendErrorsOrNext)

function sendErrorsOrNext(req, res, next){
    const bundle = res.locals.bundle

    if(bundle.erros){
        var errors = parseErrors(bundle.erros)
        res.status(500).json({errors})
    }else{
        next()
    }
}

function parseErrors(nodeRestfulErrors){
    const errors = []
    _.forIn(nodeRestfulErrors, error => errors.push(error.message))
    return errors
}

ciclo.route('count', function(req, res, next){
    ciclo.count(function(error, value){
        if(error){
            res.status(500).json({errors: [error]})
        }else{
            res.json({value})
        }
    })
})

module.exports = ciclo
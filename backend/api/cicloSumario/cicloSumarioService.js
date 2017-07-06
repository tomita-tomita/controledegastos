const _ = require('lodash')
const Ciclo = require('../ciclo/ciclo')


function getSummary(req, res){
    Ciclo.aggregate({
        $project: {credito: {$sum: "$creditos.value"}, debito: {$sum: "$debitos.value"}}
    },{
        $group: {_id: null, credito: {$sum: "$credito"}, debito: {$sum: "$debito"}}
    },{
        $project: {_id: 0, credito: 1, debito: 1}
    }, function(error, result){
        if(error){
            res.status(500).json({errors: [error]})
        }else{
            res.json(_.defaults(result[0], {credito: 0, debito: 0}))
        }
    })
}


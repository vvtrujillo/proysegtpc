const areasTpc = require('../../Models/Maestros/areas.maestros.model');

//crear
module.exports.crear = (req, res) => {
    areasTpc.create(req.body)
        .then(resp => {
            res.json({
            datosAreasTpc: resp,
            error: false
        })
    }).catch(e => {
        res.json({
            error: true,
            mensaje: 'Ha ocurrido un error al crear una respuesta.'
        })
    });
}

//Listar
module.exports.listar = (req, res) => {
    areasTpc.find()
        .then(resp => {
            res.json({
                datosAreasTpc: resp,
                error: false
            })
        }).catch(e => {
            res.json({
                error: true,
                mensaje: 'Ha ocurrido un error al listar las áreas.'
            })
        });
}
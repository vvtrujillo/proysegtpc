const RespCaminatas = require('../../Models/Caminatas/respCaminata.model');

//crear
module.exports.crear = (req, res) => {
    RespCaminatas.create(req.body)
        .then(resp => {
            res.json({
                datosRespCaminata: resp,
                error: false
            })
        }).catch(e => {
            res.json({
                error: true,
                mensaje: 'Ha ocurrido un error al crear una respuesta.'
            })
        });
}

//listar
module.exports.listar = (req, res) => {
    RespCaminatas.find()
        .then(resp => {
            res.json({
                datosRespCaminata: resp,
                error: false
            })
        }).catch(e => {
            res.json({
                error: true,
                mensaje: 'Ha ocurrido un error al listar las respuestas.'
            })
        });
}
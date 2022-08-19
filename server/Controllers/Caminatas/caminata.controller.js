const Caminatas = require('../../Models/Caminatas/caminatas.models');

//Crear
module.exports.crear = (req,res) => {
    Caminatas.create(req.body)
        .then(resp => {
            res.json({
                datosCaminata: resp,
                error: false
            })
        }).catch(e => {
            res.json({
                error: true,
                mensaje: 'Ha ocurrido un error al crear caminata.'
            })
        });
}

//Obtener
module.exports.listar = (req,res) => {
    Caminatas.find()
        .then(resp => {
            res.json({
                datosCaminata: resp,
                error: false
            })
        }).catch(e => {
            res.json({
                error: true,
                mensaje:'Ha ocurrido un error al listar las caminatas.'
            })
        });
}
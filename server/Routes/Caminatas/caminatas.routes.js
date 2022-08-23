const CaminatasController = require('../../Controllers/Caminatas/caminata.controller');
const RespCaminatasController = require('../../Controllers/Caminatas/respCaminata.controller');
const AreasTpcController = require('../../Controllers/Maestros/areas.maestros.controller');

module.exports = (app) => {
    app.post('/api/v1/caminatas', CaminatasController.crear);
    app.get('/api/v1/caminatas', CaminatasController.listar);
    //Respuestas Caminatas
    app.post('/api/v1/respcaminatas', RespCaminatasController.crear);
    app.get('/api/v1/respcaminatas', RespCaminatasController.listar);
    app.delete('/api/v1/respcaminatas/:id', RespCaminatasController.eliminar);
    //areas TPC
    app.post('/api/v1/maestros/areastpc', AreasTpcController.crear);
    app.get('/api/v1/maestros/areastpc', AreasTpcController.listar);
}
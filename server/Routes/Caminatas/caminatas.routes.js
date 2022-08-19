const CaminatasController = require('../../Controllers/Caminatas/caminata.controller');

module.exports = (app) => {
    app.post('/api/v1/caminatas', CaminatasController.crear);
    app.get('/api/v1/caminatas', CaminatasController.listar);
}
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/bdproyseg',{
    useNewUrlParser:true,
    useUnifiedTopology: true
}).then(()=>console.log('Conectado a la BD'))
    .catch(error => console.error('Ocurrió un error con la conexión a la BD', error));
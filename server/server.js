const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

//Nos conectamos a la BD
require('./Config/mongodb.config');
//definimos las rutas de la API
require('./Routes/Caminatas/caminatas.routes')(app);


app.listen(port,() => console.log('Servidor arriba en el puerto: '+ port));
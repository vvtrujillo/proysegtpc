const mongoose = require('mongoose');

const RespCaminatasSchema = mongoose.Schema({
    respuesta:{
        type: String,
        required: [true, 'La respuesta es requerida para guardar.']
    }
},{timestamps:true})

const RespCaminata = mongoose.model('RespCaminata', RespCaminatasSchema);

module.exports=RespCaminata;
const mongoose = require('mongoose');

const CaminataSchema = mongoose.Schema({
    fechaCaminata:{
        type: Date,
        required: [true, 'La fecha es requerida para la caminata.'],        
    },

    areaEvaluada:{
        type: String,
        required: [true, 'El area evaluada es requerida para la caminata.']
    },

    pregLineamientos:{
        type: String
    },

    pregActDocumentada:{
        type: String
    },

    comentariosGrales:{
        type: String,
        maxLength: [255, 'El máximo de caracteres es de 255.'],
        required: [true, 'Los comentarios de las caminatas son requeridos']
    },

    usuarioGrabacion:{
        type:String,
        required: [true, 'El usuario es requerido para grabar la caminata']
    }
},{timestamps:true})

const Caminata = mongoose.model('Caminata', CaminataSchema);

module.exports=Caminata;
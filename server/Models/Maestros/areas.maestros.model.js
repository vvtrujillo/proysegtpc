const mongoose = require('mongoose');

const areasSchema = mongoose.Schema({
    nombreArea: {
        type: String,
        required: [true, 'el nombre de area es requerido para guardar.']
    }
},{timestamps: true})

const areaTpc = mongoose.model('areaTpc', areasSchema);

module.exports = areaTpc;
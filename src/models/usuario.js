const mongoose = require('mongoose');
const UsuariosSchema = mongoose.Schema({
    nombreUsuario: {
        type: String,
        required: true,
        trim: true,
    },
   mailUsuario: {
        type: String,
        required: true,
        trim: true,
    },
    apellidoUsuario: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    dniUsuario: {
        type: Number,
        required: true,
        trim: true,
        unique: true,
    },
    Rol: {
        type: Text,
        trim: true,
    },
});

module.exports = mongoose.model('Usuario', UsuariosSchema);
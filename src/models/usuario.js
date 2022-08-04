const mongoose = require('mongoose');
const UsuariosSchema = mongoose.Schema({
    nombreUsuario: {
        type: String,
        required: true,
        trim: true,
    },
   emailName: {
        type: String,
        required: true,
        trim: true,
    },
    fotoUsuario: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    rolUsuario: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    passwordUsuario: {
        type: String,
        required: true,
        trim: true,
    },
    register: {
        type: Date,
    },
    role: {
        type: String,
        default: 'user',
        trime: true,
    },
    image: {
        type: String,
        trime: true,
    },
});

module.exports = mongoose.model('Usuario', UsuariosSchema);
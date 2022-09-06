const mongoose = require('mongoose');
const saltRounds =10;
const UsuariosSchema = mongoose.Schema({
    nombreUsuario: {
        type: String,
        required: true,
        trim: true,
    },
   mailUsuario: {
        type: String,
        trim: true,
    },
    apellidoUsuario: {
        type: String,
        trim: true,
        unique: true,
    },
    dniUsuario: {
        type: Number,
        trim: true,
        unique: true,
    },

    password: {
        type: String,
        required: true,
        trim: true,
    },

    rol: {
       type: String,
       default: "user",
       trim: true,
    }
})

// UserSchema.pre("save", function(next){
//     if(this.isNew || this.isModified("password")){
//         const document =this;
//         bcrypt.hash(document.password, saltRounds, (err, hashedPassword) =>{
//             if (err){
//                 next(err);
//             }else {document.password = hashedPassword;
//             next()
//         }
//         })}
//         else {
//             next()
//         }
    
// });

// userSchema.method.isCorrectPassword = function (password, callback) {
//     bcrypt.compare(password, this.password, function(err,same){
// if(err){
//     callback(err);
// }else {
//     callback(err,same)
// }

//     })
// }



module.exports = mongoose.model('Usuario', UsuariosSchema);
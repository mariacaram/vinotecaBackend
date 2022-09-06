import usuario from "../models/usuario";
import Usuario from "../models/usuario";
const bcrypt = require("bcrypt");
const usuarioCtrl = {};

usuarioCtrl.borrarUsuario = async(req, res) => {
    try {
        await Usuario.findByIdAndDelete(req.params.id)
        res.status(200).json({mensaje: "Se eliminó el usuario"})
    } catch (error) {
        res.status(404);        
    }

};


usuarioCtrl.modificarUsuario = async(req, res) => {
    try {
        await Usuario.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({mensaje: "Se modificó el usuario"})
    } catch (error) {
      res.status(400).json({ mensaje: "Error al crear el usuario: ", error});      
    }

};
usuarioCtrl.nuevoUsuario = async (req, res) => {
  try {
    // console.log(req.body);
    //validar (falta hacerlo, igual que en el front)
    //crear un objeto para guardar en la DB
      // crear un hash del password del ussuario antes de guardar en BD
      const password = req.body.password;
      let passwordHash = await bcrypt.hash(password, 10);
      console.log(passwordHash)
    const UsuarioNuevo = new Usuario({
      nombreUsuario: req.body.nombreUsuario,
      mailUsuario: req.body.mailUsuario,
      apellidoUsuario: req.body.apellidoUsuario,
      dniUsuario: req.body.dniUsuario,
      password: passwordHash,
    });
    console.log(UsuarioNuevo);

    //Guardar en base de datos
    await UsuarioNuevo.save();
    res.status(201).json({ mensaje: "Usuario creado correctamente" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ mensaje: "Error al crear el usuario" });
  }
};

usuarioCtrl.listarUsuario = async (req, res) => {
  try {
    const listaUsuarios = await Usuario.find();
    res.status(200).json(listaUsuarios);
  } catch (error) {
    res.status(404).json({ mensaje: "No se encontró el usuario" });
  }
};

usuarioCtrl.obtenerUsuario = async (req, res) => {
    try {
      const usuarioBuscado = await Usuario.findById(req.params.id);
      res.status(200).json(usuarioBuscado);
    } catch (error) {
      res.status(404).json({ mensaje: "No se encontró el usuario" });
    }
  };

// usuarioCtrl.registrarUsuario = async (req, res) =>{
// try {
//     const {nombreUsuario, password} = req.body;
//     const Usuario = new Usuario ({nombreUsuario, password})
//     Usuario.save (err => {
//         if (err) {
// res.status(500).send("ERROR AL REGISTRO DE USUARIO")
//         }else {
// res.status(200).send("USUARIO REGISTRADO");

//         }
//         })}
//         catch (error) {
//           res.status(404).json({ mensaje: "No se registro el usuario" });
//         }

// }

// usuarioCtrl.loginUsuario = async (req,res)=> {
//   try {
//       const {nombreUsuario, password} = req.body;
//       Usuario.findOne({nombreUsuario}, (err, usuario) => {
//           if(err){
//               res.status(500).send("ERROR AL AUTENTICAR USUARIO");}
//               else if(!usuario){
//                   res.status(500).send("EL USUARIO NO EXISTE");}
//                   else{
//                       userRoutes.isCorrectPassword (password, (err, result)=>{
//                           if(err){
//                               res.status(500).send("ERROR AL AUTENTICAR")}
//                               else if (result){
//                                   res.status(200).send("USUARIO AUTENTICADO")}  
//                                   else {res.status(500).send("USUARIO Y/O CONTRASEÑA INCORRECTA")}
//                               })
// }
// })
// }
// catch (error) {
//   res.status(404).json({ mensaje: "No se valido el usuario" });
// }}


export default usuarioCtrl;


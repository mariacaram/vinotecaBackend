import Usuario from "../models/usuario";

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

    const UsuarioNuevo = new Usuario({
      nombreUsuario: req.body.nombreUsuario,
      mailUsuario: req.body.mailUsuario,
      apellidoUsuario: req.body.apellidoUsuario,
      dniUsuario: req.body.dniUsuario,
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


export default usuarioCtrl;


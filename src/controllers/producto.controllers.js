import Producto from "../models/producto";

const productoCtrl = {};

productoCtrl.borrarProducto = (req, res) => {res.send ("Alguien quiere borrar")}
productoCtrl.nuevoProducto = (req, res) => {res.send ("Alguien quiere agregar")}

export default productoCtrl;
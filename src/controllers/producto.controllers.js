import Producto from "../models/producto";

const productoCtrl = {};

productoCtrl.borrarProducto = (req, res) => {res.send ("Alguien quiere borrar")}
productoCtrl.nuevoProducto =async(req, res) => {
    
    try{
         const productoNuevo = new Producto({ 
            nombreProducto: req.body.nombreProducto, 
            precioProducto: req.body.precioProducto, 
            foto: req.body.foto, 
            categoria: req.body.categoria,});
            
            console.log(productoNuevo);
            await productoNuevo.save();
            res.status(201).json({mensaje:"Producto creado correctamente"})
        }
            
            catch (error)
            {console.log (error)}
    ; console.log(req.body)}

export default productoCtrl;
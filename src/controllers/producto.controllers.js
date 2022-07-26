import Producto from "../models/producto";

const productoCtrl = {};

productoCtrl.borrarProducto = async(req, res) => {
    try {
        await Producto.findByIdAndDelete(req.params.id)
        res.status(200).json({mensaje: "Se eliminó el producto"})
    } catch (error) {
        res.status(404);        
    }

};


productoCtrl.modificarProducto = async(req, res) => {
    try {
        await Producto.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({mensaje: "Se modificó el producto"})
    } catch (error) {
        res.status(404);        
    }

};
productoCtrl.nuevoProducto = async (req, res) => {
  try {
    // console.log(req.body);
    //validar (falta hacerlo, igual que en el front)
    //crear un objeto para guardar en la DB

    const productoNuevo = new Producto({
      nombreProducto: req.body.nombreProducto,
      precioProducto: req.body.precioProducto,
      categoria: req.body.categoria,
    });
    console.log(productoNuevo);

    //Guardar en base de datos
    await productoNuevo.save();
    res.status(201).json({ mensaje: "Producto creado correctamente" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ mensaje: "Error al crear el producto" });
  }
};

productoCtrl.listarProducto = async (req, res) => {
  try {
    const listaProductos = await Producto.find();
    res.status(200).json(listaProductos);
  } catch (error) {
    res.status(404).json({ mensaje: "No se encontró el producto" });
  }
};

productoCtrl.obtenerProducto = async (req, res) => {
    try {
      const productoBuscado = await Producto.findById(req.params.id);
      res.status(200).json(productoBuscado);
    } catch (error) {
      res.status(404).json({ mensaje: "No se encontró el producto" });
    }
  };


export default productoCtrl;


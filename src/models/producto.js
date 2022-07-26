import mongoose, {Schema} from "mongoose";

const productoSchema = new Schema ({
    nombreProducto: {
        required:true,
        type: String, 
        maxlenght:100,
        unique:true,
    },
    precioProducto: {
        required:true,
        type: Number, 
        
    },
    foto: {
        required:true,
        type: String, 
        
    },
    categoria: {
        required:true,
        type: String, 
},});

const Producto = mongoose.model ("producto", productoSchema)

export default Producto
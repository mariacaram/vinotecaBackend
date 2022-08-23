import { Router } from "express";
import productoCtrl from "../controllers/producto.controllers";

const router = Router()


router.route("/productos").get (productoCtrl.listarProducto)
router.route("/productos").post (productoCtrl.nuevoProducto)
router.route("/productos/:id").get(productoCtrl.obtenerProducto).delete(productoCtrl.borrarProducto).put(productoCtrl.modificarProducto);
export default router
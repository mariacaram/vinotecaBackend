import { Router } from "express";
import productoCtrl from "../controllers/producto.controllers";

const router = Router()


router.route("/").get (productoCtrl.listarProducto)
router.route("/").post (productoCtrl.nuevoProducto)
router.route("/:id").get(productoCtrl.obtenerProducto).delete(productoCtrl.borrarProducto).put(productoCtrl.modificarProducto);
export default router
import { Router } from "express";
import productoCtrl from "../controllers/producto.controllers";

const router = Router()


router.route("/").delete (productoCtrl.borrarProducto)
router.route("/").post (productoCtrl.nuevoProducto)

export default router
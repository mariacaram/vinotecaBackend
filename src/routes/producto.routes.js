import { Router } from "express";
import productoCtrl from "../controllers/producto.controllers";

const router = Router()


router.route("/borrarproducto").delete (productoCtrl.borrarProducto)

export default router
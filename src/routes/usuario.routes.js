import { Router } from "express";
import usuarioCtrl from "../controllers/usuarioController";

const router = Router()


router.route("/").get (usuarioCtrl.listarUsuario)
router.route("/").post (usuarioCtrl.nuevoUsuario)
router.route("/:id").get(usuarioCtrl.obtenerUsuario).delete(usuarioCtrl.borrarUsuario).put(usuarioCtrl.modificarUsuario);
export default router
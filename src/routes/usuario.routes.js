import { Router } from "express";
import usuarioCtrl from "../controllers/usuarioController";

const userRoutes = Router()


userRoutes.route("/usuario").get (usuarioCtrl.listarUsuario)
userRoutes.route("/usuario").post (usuarioCtrl.nuevoUsuario)
userRoutes.route("/usuario/:id").get(usuarioCtrl.obtenerUsuario).delete(usuarioCtrl.borrarUsuario).put(usuarioCtrl.modificarUsuario);
export default userRoutes
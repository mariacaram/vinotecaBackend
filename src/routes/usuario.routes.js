import { Router } from "express";
import usuarioCtrl from "../controllers/usuarioController";

const userRoutes = Router()


userRoutes.route("/").get (usuarioCtrl.listarUsuario)
userRoutes.route("/").post (usuarioCtrl.nuevoUsuario)
userRoutes.route("/:id").get(usuarioCtrl.obtenerUsuario).delete(usuarioCtrl.borrarUsuario).put(usuarioCtrl.modificarUsuario);
export default userRoutes
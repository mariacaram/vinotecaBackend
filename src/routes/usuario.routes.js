import { Router } from "express";
import usuarioCtrl from "../controllers/usuarioController";
import loginCtrl from "../controllers/loginControler";

const userRoutes = Router()


userRoutes.route("/usuario").get (usuarioCtrl.listarUsuario)
userRoutes.route("/usuario").post (usuarioCtrl.nuevoUsuario)
userRoutes.route("/usuario/:id").get(usuarioCtrl.obtenerUsuario).delete(usuarioCtrl.borrarUsuario).put(usuarioCtrl.modificarUsuario);
// userRoutes.route("/Register").post (usuarioCtrl.registrarUsuario)
// userRoutes.route("/login").post (usuarioCtrl.loginUsuario)

export default userRoutes
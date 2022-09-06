import { Router } from "express";
import loginCtrl from "../controllers/loginControler";
import usuarioCtrl from "../controllers/usuarioController";
import verificarJWT from "../middleware/verificarJWT";
//instancia de router para crear las rutas
const routerLogin = Router()

// creo las rutas

routerLogin.route("/login").post(loginCtrl.login);

routerLogin.route("/Register").post(usuarioCtrl.nuevoUsuario);

routerLogin.route("/isUserAuth").get(verificarJWT, loginCtrl.adminBoard);

export default routerLogin;






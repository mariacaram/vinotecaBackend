import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import router from "./routes/producto.routes";
import userRoutes from "./routes/usuario.routes";
import "./database"
import routerLogin from "./routes/login.routes";

const app = express ();
const Usuario = require ("./models/usuario")
const bodyParser = require ("body-parser")
app.set ("port", process.env.PORT || 4000)

app.listen(app.get("port"), ()=> {
    console.log ("Estoy usando el puerto" +  app.get("port"));
    console.log(path.join(__dirname,"../public"));
})
//configuracion midlewares

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
express.urlencoded({ extended: true });
app.use(express.static(path.join(__dirname, "../public")));

app.use("/vinoteca", router , userRoutes , routerLogin );

// crear rutas

app.get("/", (req,res) => {res.send ("esto es una repsuesta desde el backend")})
app.delete("/borrarproducto", (req,res) => {res.send ("esto es una peticion para borrar")})


console.log("Hola Mundo como estan");



//configurar el bienvenida.html:


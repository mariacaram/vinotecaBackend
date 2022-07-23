const express = require('express')
import morgan from "morgan";
import cors from "cors";
const app = express ();


app.set ("port", process.env.PORT || 4000)

app.listen(app.get("port"), ()=> {
    console.log ("Estoy usando el puerto" +  app.get("port"))
})


// crear rutas

app.get("/", (req,res) => {res.send ("esto es una repsuesta desde el backend")})
app.delete("/borrarproducto", (req,res) => {res.send ("esto es una peticion para borrar")})

console.log("Hola Mundo");

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
express.urlencoded({ extended: true });
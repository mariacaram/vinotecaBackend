import mongoose from "mongoose";

// const url = "mongodb://localhost:27017/vinoteca"
const url = "mongodb+srv://vinotecacdl:vinotecacdl@cluster0.x0r6j.mongodb.net/vinotecacdl"

mongoose.connect( url, {useNewUrlParser:true})

const connection = mongoose.connection;

connection.once ("open", ()=> {console.log("DB conectada")})
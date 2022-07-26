import mongoose from "mongoose";

const url = "mongodb://localhost:27017/vinoteca"

mongoose.connect( url, {useNewUrlParser:true})

const connection = mongoose.connection;

connection.once ("open", ()=> {console.log("DB conectada")})
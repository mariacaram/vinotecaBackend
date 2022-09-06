const jwt = require("jsonwebtoken");
import token_secret from "../config/token";
const verificarJWT = (req, res, next) => {
    const token =  req.header("x-access-token");
    console.log(token);
    if(!token){
      res.status(404).json({ mensaje: "Usted necesita de un token"})
    }else{
      jwt.verify(token, token_secret, (err, decoded) => {
        if(err) { res.status(401).json({ auth: false, mensaje: "fallo la autentificación"});
      }else{
        req._id = decoded._id;
        next();
      }
      })
    }
  }

  export default verificarJWT;
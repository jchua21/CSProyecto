import jwt from "jsonwebtoken";
import User from "../models/User.js";

const authMiddleware = async (req, res, next) => {
  // console.log(req.headers);
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      //Lanza error si el token es erroneo
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      //Si el token hace match lo guarda en req
      req.user = await User.findById(decoded.id).select("-password");

      return next();
    } catch (e) {
      const error = new Error("Token Inexistente");
      return res.status(403).json({ msg: error.message });
    }
  }

  if (!token) {
    const error = new Error("Token Inexistente");
    res.status(403).json({ msg: error.message });
  }
  next();
};

export default authMiddleware;

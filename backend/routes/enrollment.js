import express from "express";
import authMiddleware from "../middlewares/auth.js";
import {
  obtenerInscripciones,
  eliminarInscripcion,
  inscribir,
} from "../controllers/enrollment.js";

const router = express.Router();

//ROUTES
router.get("/", authMiddleware, obtenerInscripciones);
router.post("/", authMiddleware, inscribir);
router.delete("/:id", authMiddleware, eliminarInscripcion);

export default router;

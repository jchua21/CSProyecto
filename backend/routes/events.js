import express from "express";
import authMiddleware from "../middlewares/auth.js";
import {
  obtenerEventos,
  obtenerEventosDoctores,
  crearEvento,
  eliminarEvento,
  obtenerEvento,
  actualizarEvento,
} from "../controllers/events.js";

const router = express.Router();

//ROUTES
router.get("/", authMiddleware, obtenerEventos);
router.get("/doctor", authMiddleware, obtenerEventosDoctores);
router.get("/:id", authMiddleware, obtenerEvento);
router.post("/", authMiddleware, crearEvento);
router.delete("/:id", authMiddleware, eliminarEvento);
router.patch("/:id", authMiddleware, actualizarEvento);

export default router;

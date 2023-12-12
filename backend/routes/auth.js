import express from "express";
import { autenticar, registrar, perfil } from "../controllers/auth.js";
import authMiddleware from "../middlewares/auth.js";
const router = express.Router();

router.post("/login", autenticar);
router.post("/registrar", registrar);

//PRIVATE AREA
router.get("/perfil", authMiddleware, perfil);

export default router;

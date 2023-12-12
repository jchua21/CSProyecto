import express from "express";
import dotenv from "dotenv";
import { corsMiddleware } from "./middlewares/cors.js";
import conectarDB from "./config/db.js";
import eventsRoutes from "./routes/events.js";
import authRoutes from "./routes/auth.js";
import enrollmentRoutes from "./routes/enrollment.js";

const app = express();
//Hailitar JSON
app.use(express.json());
//Para identificar ENV
dotenv.config();

//Conectar DB
conectarDB();

//Policy cors
app.use(corsMiddleware());

app.use("/api/auth", authRoutes);
app.use("/api/events", eventsRoutes);
app.use("/api/enrollments", enrollmentRoutes);

const PORT = process.env.PORT ?? 3000;
app.listen(PORT, () => {
  console.log(`Servidor funcionando en el puerto ${PORT}`);
});

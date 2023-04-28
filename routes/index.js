import express from "express";
import { paginaInicio, paginaViajes, paginaNosotros, testimoniales } from "../controllers/paginaControllers.js";

const router = express.Router();

// Rutas
router.get("/", paginaInicio);

router.get("/nosotros", paginaNosotros);

router.get("/viajes", paginaViajes);

router.get("/testimoniales", testimoniales);

export default router;

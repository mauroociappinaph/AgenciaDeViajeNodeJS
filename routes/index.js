import express from "express";
import {
  paginaInicio,
  paginaViajes,
  paginaDetalleViaje,
  paginaNosotros,
  testimoniales,
} from "../controllers/paginaControllers.js";

import { guardarTestimoniales } from "../controllers/testimonialesControllers.js";

const router = express.Router();

// Rutas
router.get("/", paginaInicio);

router.get("/nosotros", paginaNosotros);

router.get("/viajes", paginaViajes);

router.get("/viajes/:slug", paginaDetalleViaje);

router.get("/testimoniales", testimoniales);

router.post("/testimoniales", guardarTestimoniales);

export default router;

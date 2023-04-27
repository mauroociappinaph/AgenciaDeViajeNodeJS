import express from "express";
import {paginaInicio} from '../controllers/paginaControllers.js'
const router = express.Router();

router.get("/", );

// paginaInicio

router.get("/nosotros", paginaInicio);

router.get("/viajes", (req, res) => {
  res.render("viajes", {
    pagina: "Viajes",
  });
});


router.get("/testimoniales", (req, res) => {
  res.render("testimoniales", {
    pagina: "Testimoniales",
  });
});

export default router;

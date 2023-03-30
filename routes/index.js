import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.render("inicio", {
    pagina: "inicio",
  });
});

router.get("/nosotros", (req, res) => {
  const viajes = "Viaje a Brasil";

  res.render("nosotros", {
    viajes,
  });
});

export default router;

import { Viaje } from "../models/Viaje.js";
import { Testimonial } from "../models/Testimoniales.js";

//!Funciones de renderizado de vistas
const paginaInicio = (req, res) => {
  res.render("inicio", {
    pagina: "Inicio",
  });
};

const paginaNosotros = (req, res) => {
  res.render("nosotros", {
    pagina: "Nosotros",
  });
};

const paginaViajes = async (req, res) => {
  //!Consultar base de datos
  const viajes = await Viaje.findAll();

  console.log(viajes);

  res.render("viajes", {
    pagina: "Próximos Viajes",
    viajes,
  });
};

const paginaDetalleViaje = async (req, res) => {
  const { slug } = req.params;

  try {
    const viaje = await Viaje.findOne({ where: { slug } });

    res.render("viaje", {
      pagina: "Información viaje",
      viaje,
    });
  } catch (error) {
    console.log(error);
  }
};

const testimoniales = async (req, res) => {

  try {
    const testimoniales = await Testimonial.findAll();
    res.render("testimoniales", {
      pagina: "Testimoniales",
      testimoniales
    });
  } catch (error) {
    console.log(error);
  }
};

// Exportación de funciones
export {
  paginaInicio,
  paginaViajes,
  paginaDetalleViaje,
  paginaNosotros,
  testimoniales,
};

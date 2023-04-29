import { Viaje } from "../models/Viaje.js";
import { Testimonial } from "../models/Testimoniales.js";

//ANCHOR -  Funciones de renderizado de vistas

//TODO - Pagina de inicio
const paginaInicio = async (req, res) => {
  //NOTE -  Consultar tres viajes del modelo Viajes

  try {
    const viajes = await Viaje.findAll({ limit: 3 });

    res.render("inicio", {
      pagina: "Inicio",
      clase: "home",
      viajes,
    });
  } catch (error) {
    console.log(error);
  }
};

//TODO - Pagina de nosotros
const paginaNosotros = (req, res) => {
  res.render("nosotros", {
    pagina: "Nosotros",
  });
};

//TODO - Paginas de viaje
const paginaViajes = async (req, res) => {
  //!Consultar base de datos
  const viajes = await Viaje.findAll();

  console.log(viajes);

  res.render("viajes", {
    pagina: "Próximos Viajes",
    viajes,
  });
};

//TODO - Página detalle de viaje
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

//TODO - Testimoniales
const testimoniales = async (req, res) => {
  try {
    const testimoniales = await Testimonial.findAll();
    res.render("testimoniales", {
      pagina: "Testimoniales",
      testimoniales,
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

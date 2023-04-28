import { Viaje}  from '../models/Viaje.js'


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
    pagina: "Viajes",
    viajes,
  });
};

const testimoniales = (req, res) => {
  res.render("testimoniales", {
    pagina: "Testimoniales",
  });
};

// Exportación de funciones
export { paginaInicio, paginaViajes, paginaNosotros, testimoniales };

import { Testimonial } from "../models/Testimoniales.js";
const guardarTestimoniales = async (req, res) => {
  //NOTE - Validar ...
  const { nombre, correo, mensaje } = req.body;

  const errores = [];

  if (nombre.trim() === "") {
    errores.push({ mensaje: "El nombre esta vació" });
  }

  if (correo.trim() === "") {
    errores.push({ mensaje: "El correo esta vació" });
  }

  if (mensaje.trim() === "") {
    errores.push({ mensaje: "El mensaje esta vació" });
  }
  if (errores.length > 0) {
    //NOTE - Consultar testimoniales existentes
    const testimoniales = await Testimonial.findAll();
    //NOTE Mostrar vista con errores
    res.render("testimoniales", {
      pagina: "Testimoniales",
      errores,
      nombre,
      correo,
      mensaje,
      testimoniales
    });
  } else {
    //NOTE - Almacenar en la base de datos.

    try {
      await Testimonial.create({
        nombre,
        correo,
        mensaje,
      });

      res.redirect("/testimoniales");
    } catch (error) {
      console.log(error);
    }
  }
};

export { guardarTestimoniales };

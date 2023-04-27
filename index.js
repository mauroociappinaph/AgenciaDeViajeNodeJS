import express from "express";
import router from "./routes/index.js";
import db from "./config/db.js";

const app = express();

//Conectar a la base de datos
db.authenticate()
  .then(() => console.log("Base de datos conectada"))
  .catch((error) => console.log(error));

//Definir Puerto
const port = process.env.PORT || 4000;

//Habilitar PUG
app.set("view engine", "pug");

//? Pug es un motor de plantillas que simplifica la
//? creación de vistas HTML dinámicas en una aplicación web,
//? y es utilizado por muchos desarrolladores de Node.js y
//? Express para generar vistas atractivas y fácilmente mantenibles.

// Obtener el año actual
app.use((req, res, next) => {
  const year = new Date();

  res.locals.actualYear = year.getFullYear();
  res.locals.nombresitio = "Agencia de Viajes";
  return next();
});

//Definir carpeta public
app.use(express.static("public"));

// Agregar Router
app.use("/", router);

app.listen(port, () => {
  console.log(`El servidor está funcionando en el ${port}`);
});

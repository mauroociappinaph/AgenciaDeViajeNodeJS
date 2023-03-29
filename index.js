import  express  from "express";
import router from "./routes/index.js";

const app = express();


//Definir Puerto
const port = process.env.PORT || 4000

//Habilitar PUG
app.set('view engine', 'pug' );

//? Pug es un motor de plantillas que simplifica la 
//? creación de vistas HTML dinámicas en una aplicación web, 
//? y es utilizado por muchos desarrolladores de Node.js y 
//? Express para generar vistas atractivas y fácilmente mantenibles.

// Agregar Router
app.use("/", router)


app.listen ( port , () =>  {
    console.log(`El servidor está funcionando en el ${port}`);


})
const express = require('express');

const app = express();


//Definir Puerto
const port = process.env.PORT || 4000

app.listen ( port , () =>  {
    console.log(`El servidor está funcionando en el ${port}`);


})
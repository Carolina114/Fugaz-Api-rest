const express = require('express')
const app = express()

//importar conexion a mongo db
const archivoBD = require('./conexion')

//Import of archivo of routes and model user
const rutausuario = require('./routes/usuario')

//Import body parser
const bodyParser = require ('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))

const PORT = 3000;

app.use('/api/usuario', rutausuario)

app.get('/', (req, res) => {
    res.end('Bienvenidos al servidor backend')
})

//configurar server 
app.listen(PORT, () => {
    console.log(`Servidor activo en el puerto ${PORT}`);
  });
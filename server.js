const express = require('express')
const bodyParser = require('body-parser')

/* crear aplicación express */
const app = express()

/* Configuración del puerto del servidor */
const port = process.env.PORT || 5000

/* analizar solicitudes de tipo de contenido - application/x-www-form-urlencoded */
app.use(bodyParser.urlencoded({ extended: true }))

/* analizar solicitudes de tipo de contenido - application/json */
app.use(bodyParser.json())

/* definir una ruta raíz */
app.get('/', (req, res) => {
  res.send("Hello World")
})

/* Requerir rutas de empleados */
const employeeRoutes = require('./src/routes/employee.routes')

/* usando como middleware */
app.use('/api/v1/employees', employeeRoutes)

/* escuchar solicitudes */
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
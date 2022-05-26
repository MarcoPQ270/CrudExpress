const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')



/* crear aplicación express */
const app = express()

/* Configuración del puerto del servidor */
const port = process.env.PORT || 3000
app.use(cors())

/* analizar solicitudes de tipo de contenido - application/x-www-form-urlencoded */
app.use(bodyParser.urlencoded({ extended: true }))

/* analizar solicitudes de tipo de contenido - application/json */
app.use(bodyParser.json())

/* definir una ruta raíz */
app.get('/', (req, res) => {
  res.send("Hola Mundo, ejecutando... EXPRESS")
})

/* Requerir rutas de empleados */
const employeeRoutes = require('./src/routes/employee.routes')

/* usando como middleware */
app.use('/api/v1/employees', employeeRoutes)

/* Requerir rutas de empleados */
const productsRoutes = require('./src/routes/products.routes')

/* usando como middleware */
app.use('/api/v1/products', productsRoutes)

/* escuchando solicitudes */
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`)
})

/* API END POINTS */

/* 
GET /api/v1/employees: Traera a todos los empleados almacenados en la base de datos.
GET /api/v1/employees/<employee_id>: Traera a un empleado específico con employee_id.
POST /api/v1/employees : Crea un empleado
DELETE /api/v1/employees/<employee_id>: Elimina un empleado
PUT /api/v1/employees/<employee_id>: Actualizar a un empleado completamente
*/

/* 
GET /api/v1/products: Traera a todos los empleados almacenados en la base de datos.
GET /api/v1/products/<products_id>: Traera a un empleado específico con products_id.
POST /api/v1/products : Crea un empleado
DELETE /api/v1/products/<products_id>: Elimina un products
PUT /api/v1/products/<products_id>: Actualizar a un products completamente
*/
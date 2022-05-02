const express = require('express')
const router = express.Router()
const employeeController = require('../controllers/employee.controller')

/* Recuperar a todos los empleados */
router.get('/', employeeController.findAll)

/* Crear un nuevo empleado */
router.post('/', employeeController.create)

/* Recuperar un solo empleado con id. */
router.get('/:id', employeeController.findById)

/* Actualizar a un empleado con id */
router.put('/:id', employeeController.update)

/* Eliminar un empleado con id */
router.delete('/:id', employeeController.delete)

module.exports = router
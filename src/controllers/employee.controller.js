'use strict'
const Employee = require('../models/employee.model')

/* Trae todos lo empleados */
exports.findAll = (req, res) => {
  Employee.findAll((err, employee) => {
    console.log('controller get todos')
    err ?  res.send(err) : res.send(employee)
  })
}

/* Inserta un nuevo empleado */
exports.create = (req, res) => {
  const new_employee = new Employee(req.body)
  /* maneja el error nulo */
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: 'Por favor proporcione todos los campos requeridos' })
  } else {
    Employee.create(new_employee, (err, employee) => {
      console.log('controller agregar empleado')
      err ? res.send(err) : res.json({ error: false, message: "Empleado añadido con éxito!", data: employee })
    })
  }
}

/* Busqueda en base al ID */
exports.findById = (req, res) => {
  Employee.findById(req.params.id, (err, employee) => {
    console.log('controller buscar empleado')
    err ?  res.send(err) : res.json(employee)
  })
}

/* Actualiza el empleado */
exports.update = (req, res) => {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: 'Por favor proporcione todos los campos requeridos' })
  } else {
    Employee.update(req.params.id, new Employee(req.body), (err, employee) => {
      console.log('controller actualizar empleado')
      err ? res.send(err) : res.json({ error: false, message: 'Empleado actualizado con éxito' })
    })
  }
}

/* Elimina el empleado */
exports.delete = (req, res ) => {
  Employee.delete(req.params.id, (err, employee) => {
    console.log('controller Elimina empleado')
    err ?  res.send(err) : res.json({ error: false, message: 'Empleado eliminado con éxito' })
  })
}
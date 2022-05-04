'use strict'
const Products = require('../models/products.model')

/* Inserta un nuevo producto */
exports.create = (req, res) => {
    const new_product = new Products(req.body)
    /* maneja el error nulo */
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
      res.status(400).send({ error: true, message: 'Por favor proporcione todos los campos requeridos' })
    } else {
      Products.create(new_product, (err, product) => {
        console.log('controller agregar producto')
        err ? res.send(err) : res.json({ error: false, message: "producto añadido con éxito!", data: product })
      })
    }
  }

  /* Trae todos los productos */
exports.findAll = (req, res) => {
  Products.findAll((err, product) => {
    console.log('controller get todos productos')
    err ?  res.send(err) : res.send(product)
  })
}

/* Busqueda en base al ID */
exports.findById = (req, res) => {
  Products.findById(req.params.id, (err, product) => {
    console.log('controller buscar empleado')
    err ?  res.send(err) : res.json(product)
  })
}

/* Elimina el producto */
exports.delete = (req, res ) => {
  Products.delete(req.params.id, (err, product) => {
    console.log('controller Elimina producto')
    err ?  res.send(err) : res.json({ error: false, message: 'producto eliminado con éxito' })
  })
}

/* Actualiza el empleado */
exports.update = (req, res) => {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: 'Por favor proporcione todos los campos requeridos' })
  } else {
    Products.update(req.params.id, new Products(req.body), (err, product) => {
      console.log('controller actualizar empleado')
      err ? res.send(err) : res.json({ error: false, message: 'producto actualizado con éxito' })
    })
  }
}
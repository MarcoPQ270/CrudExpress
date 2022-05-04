const express = require('express')
const router = express.Router()
const productsController = require('../controllers/products.controller')

/* Crear un nuevo producto */
router.post('/', productsController.create)

/* Recuperar a todos los productos */
router.get('/', productsController.findAll)

/* Recuperar un solo producto con id. */
router.get('/:id', productsController.findById)

/* Eliminar un producto con id */
router.delete('/:id', productsController.delete)

/* Actualizar a un producto con id */
router.put('/:id', productsController.update)

module.exports = router
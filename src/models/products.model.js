'use strict'
let dbConn = require('./../../config/db.config')

/* Crear objeto de los products */
let Products = function (product) {
  this.nameProduct = product.nameProduct
  this.priceProduct = product.priceProduct
}

Products.create = (newProd, result) => {
  dbConn.query("INSERT INTO products set ?", newProd, (err, res) => {
    if (err) {
      console.log("error: ", err)
      result(err, null)
    }
    else {
      console.log(res.insertId)
      result(null, res.insertId)
    }
  })
}

Products.findAll = result => {
  dbConn.query("Select * from products", (err, res) => {
    console.log(res)
    err ? result(null, err) : result(null, res)
  })
}

Products.findById = (id, result) => {
  dbConn.query("Select * from products where idProduct = ? ", id, (err, res) => {
    if (err) {
      console.log("error: ", err)
      result(err, null)
    }
    else {
      result(null, res)
    }
  })
}

Products.delete = (id, result) => {
  dbConn.query("DELETE FROM products WHERE idProduct = ?", [id], (err, res) => {
    if (err) {
      console.log("error: ", err)
      result(null, err)
    }
    else {
      result(null, res)
    }
  })
}

Products.update = (id, product, result) => {
  dbConn.query("UPDATE products SET nameProduct=? WHERE idProduct = ?", [product.nameProduct, product.priceProduct, id], (err, res) => {
    if (err) {
      console.log("error: ", err)
      result(null, err)
    } else {
      result(null, res)
    }
  })
}

module.exports = Products
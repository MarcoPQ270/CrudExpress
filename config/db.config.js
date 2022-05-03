'use strict'
const mysql = require('mysql')

/* Conexion local a la base de datos */
const dbConn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'node_mysql_crud_db'
})

dbConn.connect(err => {
  if (err) throw err
  console.log("Base de datos Conectada!")
})

module.exports = dbConn
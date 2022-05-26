'use strict'
const mysql = require('mysql')

/* Conexion local a la base de datos */
const dbConn = mysql.createConnection({
  host     : 'byk9i8mybf4sd74ljwcp-mysql.services.clever-cloud.com',
  user     : 'ujhuqqzphb5qexzs',
  password : 'vuktUcUvyF51PZRTmvlh',
  database : 'byk9i8mybf4sd74ljwcp'
})

dbConn.connect(err => {
  if (err) throw err
  console.log("Base de datos Conectada!")
})

module.exports = dbConn
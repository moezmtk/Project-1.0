const express = require('express')
const mysql = require('mysql')
const { Sequelize } = require('sequelize')



/*const connected = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'base'
})*/


const db = new Sequelize('base', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  })


module.exports = db
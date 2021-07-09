const express = require('express')
const mysql = require('mysql')
const { Sequelize } = require('sequelize')



/*const connected = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'base'
})*/


const connected = new Sequelize('base', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  })


/*connected.connect((error)=>{
    if(error) throw error;
    console.log('Datebase connected Successfully!!!')
})*/


//testing connection 
try {
    await connected.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

module.exports = connected
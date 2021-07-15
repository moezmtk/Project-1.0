const express = require('express')
const { DataTypes } = require('sequelize')
const db =  require('../Config/db.config')


const Role = db.define("Role", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
    name: {
        type: DataTypes.STRING
      }
    },
    {
    freezeTableName: true,
    tableName: 'roles',
    timestamps: false
  
})
  
  
module.exports = Role
const express = require('express')
const { DataTypes } = require('sequelize')
const db =  require('../Config/db.config')

const User = db.define('User', {
    
    first_Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
      },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: false
      },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false
      }
    },
    {freezeTableName: true,
    tableName: 'users'
  })
  
    



  module.exports = User


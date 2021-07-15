const express = require('express')
const { DataTypes } = require('sequelize')
const db =  require('../Config/db.config')

const User = db.define('User', {
    
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    }
    },
    {
    freezeTableName: true,
    tableName: 'users',
    timestamps: false
  
  })
  
    



  module.exports = User


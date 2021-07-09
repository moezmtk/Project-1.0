const express = require('express')
const { Sequelize, DataTypes } = require('sequelize')
const sequelize = new Sequelize('sqlite::memory:', {
    define: {
      freezeTableName: true
    }
  })

const User = sequelize.define('User', {
    // Model attributes are defined here
    id: {
        type: Sequelize.INREGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    }
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
      }
    email: {
        type: DataTypes.STRING,
        allowNull: false
      }
    phone: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    status: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    created_at:{
        type: DataTypes.DATE,
        allowNull: false
    }})
  
  // `sequelize.define` also returns the model
  console.log(User === sequelize.models.User); // true

  module.exports = User


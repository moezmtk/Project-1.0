
const { DataTypes } = require('sequelize')
const express = require('express')
const User = require('../models/user.model')


exports.findOne = (req, res) => {
    const id = req.params.id
    
    console.log(id)

    User.findByPk(id)
        .then(data => {
        res.send(data)
        })
        .catch(err => {
        res.status(500).send({
          message: "Error retrieving Tutorial with id=" + id
        })
        })

        
    res.json(User)
  }


const { DataTypes } = require('sequelize')
const express = require('express')
const User = require('../models/user.model')




exports.update = (req, res) => {
    const id = req.params.id
    
    console.log(id)

    User.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "User was updated successfully."
          })
        } else {
          res.send({
            message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`
          })
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating User with id=" + id
        })
      })
      
  }
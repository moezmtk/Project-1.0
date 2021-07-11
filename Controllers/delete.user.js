const { DataTypes } = require('sequelize')
const express = require('express')
const User = require('../models/user.model')




exports.delete = (req, res) => {
    const id = req.params.id
    console.log(id)

    User.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
            res.send({
            message: "Tutorial was deleted successfully!"
          })
        } else {
          res.send({
            message: `Cannot delete User with id=${id}. Maybe User was not found!`
          })
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete User with id=" + id
        })
      })
  }

const { DataTypes } = require('sequelize')
const express = require('express')
const User = require('../models/user.model')


exports.findAll = (req, res) => {
    const first_name = req.query.first_name;
    var condition = first_name ? { first_name: { [Op.like]: `%${first_name}%` } } : null;
    
    console.log(condition)
    
    User.findAll({ where: condition })
        .then(data => {
        res.send(data)
         })
        .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving tutorials."
        })
      })


   
}

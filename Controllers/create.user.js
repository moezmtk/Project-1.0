const { DataTypes } = require('sequelize')
const express = require('express')
const User = require('../models/user.model')
//exemple : { "first_name": "moez", "last_name" : "barhoumi", "email" : "moez@gmail.com", "phone" : "20189195", "status" : "1" }


//signup user
exports.createUser = async(req, res) => {    
    

    console.log('creat.user "BODY"  ',req.body)

    User.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      username: req.body.username,
      password:req.body.password,
      email: req.body.email}
      )
      
      .then(data => {
        res.send(data)
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the user."
        })
      })
  


    }
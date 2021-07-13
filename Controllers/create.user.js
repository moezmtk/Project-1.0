const { DataTypes } = require('sequelize')
const express = require('express')
const User = require('../models/user.model')

//exemple : { "first_name": "moez", "last_name" : "barhoumi", "email" : "moez@gmail.com", "phone" : "20189195", "status" : "1" }

exports.createUser = async(req, res) => {    
    

    console.log('creat.user "BODY"  ',req.body)

    User.create(req.body)
      .then(data => {
       res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
          err.message || "Some error occurred while creating the Tutorial."
        })
      })}

          

    

    
      
    
  



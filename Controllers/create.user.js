const { DataTypes } = require('sequelize')
const express = require('express')
const User = require('../models/user.model')
var jwt = require("jsonwebtoken")
var CryptoJS  = require("crypto-js")
//exemple : { "first_name": "moez", "last_name" : "barhoumi", "email" : "moez@gmail.com", "phone" : "20189195", "status" : "1" }


//signup user
exports.signup = async(req, res) => {    
    

    console.log('creat.user "BODY"  ',req.body)

    User.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      username: req.body.username,
      email: req.body.email,
      password:CryptoJS.AES.encrypt(JSON.stringify(req.body.password)).toString() })
      .then(user => {
        if (req.body.roles) {
          Role.findAll({
            where: {
              name: {
                [Op.or]: req.body.roles
              }
            }
          }).then(roles => {
            user.setRoles(roles).then(() => {
              res.send({ message: "User was registered successfully!" })
            })
          })
        } else {
          // user role = 1
          user.setRoles([1]).then(() => {
            res.send({ message: "User was registered successfully!" })
          })
        }
      })
      .catch(err => {
        res.status(500).send({ message: err.message })
      })
  }
  
  
  
  
  


          

    

    
      
    
  



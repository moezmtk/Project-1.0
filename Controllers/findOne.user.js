const { DataTypes } = require('sequelize')
const express = require('express')
const User = require('../models/user.model')
const config = require("../config/auth.config")
const { user } = require('../models/user_role')

// signin user
exports.findOne = (req, res) => {
    const username = req.body.username
    
    console.log('username : ',username)

    User.findByPk(username)
    .then(user => {
      res.send(user)
      if (!user) {
        return res.status(404).send({ message: "Username Not found." })
      }
    


    var bytes = CryptoJS.AES.decrypt(req.body.password,password)
    var password = bytes.toString(CryptoJS.enc.Utf8)
    if (password != '') {
      result = content
  }
  var token = jwt.sign({ id: user.id }, config.secret, {
    expiresIn: 86400 // 24 hours
  })

  var authorities = [];
      user.getRoles().then(roles => {
        for (let i = 0; i < roles.length; i++) {
          authorities.push("ROLE_" + roles[i].name.toUpperCase())
        }
        res.status(200).send({
          id: user.id,
          first_name: user.first_name,
          last_name: user.last_name,
          username: user.username,
          email: user.email,
          roles: authorities,
          accessToken: token
        })
      })






    })
  
  }
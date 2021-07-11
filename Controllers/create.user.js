
const { DataTypes } = require('sequelize')
const express = require('express')
const User = require('../models/user.model')

//exemple : { "first_name": "moez", "last_name" : "barhoumi", "email" : "moez@gmail.com", "phone" : "20189195", "status" : "1" }

exports.createUser = async(req, res) => {    
    const body = {
      first_name : req.body.first_name,
      last_name : req.body.last_name,
      email : req.body.email,
      phone : req.body.phone,
      status : req.body.status}

    console.log('creat.user "BODY"  ',body)

    User.create(body)

    console.log('creat.user "USER" ',User)

    res.json(User)
      
    
  }



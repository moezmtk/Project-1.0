
const express = require('express')
const connected = require('../Config/db.config')

//exemple : { "frist_name": "moez", "last_name" : "barhoumi", "email" : "moez@gmail.com", "phone" : "20189195", "status" : "1" }

// creat new user
const User = User.create({ frist_name: req.body.frist_name , last_name : req.body.last_name , email : req.body.email , phone : req.body.phone , status : req.body.status })
   
module.exports = User
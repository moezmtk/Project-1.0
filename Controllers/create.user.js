
const express = require('express')
const connected = require('../Config/db.config')

//exemple : { "frist_name": "moez", "last_name" : "barhoumi", "email" : "moez@gmail.com", "phone" : "20189195", "status" : "1" }

// creat new user
const User = User.create((req,res)=>{
    const body = req.body
    res.json({body})
}  )
   

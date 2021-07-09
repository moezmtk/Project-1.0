
const express = require('express')
const connected = require('../Config/db.config')


//exemple : { "frist_name": "moez", "last_name" : "barhoumi", "email" : "moez@gmail.com", "phone" : "20189195", "status" : "1" }

// creat new user
exports.createUser = (req,res)=>{
    connected.query('INSERT INTO user SET ? ',req,(err,res)=>{
        if(err){
            console.log('Error while inserting data');
            res.json({error:err});
        }else{
            console.log('User created succefully');
            res.json({success:res})
        }
    })
   
}
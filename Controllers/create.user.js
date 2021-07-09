
const express = require('express')



// creat new user
exports.createUser = (req,res)=>{
    connected.query('INSERT INTO user SET ? ',req,(err,res)=>{
        if(err){
            console.log('Error while inserting data');
            result(null,err);
        }else{
            console.log('User created succefully');
            result(null,res)
        }
    })
}
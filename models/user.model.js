const express = require('express')
const connected = require('../Config/db.config')

let User =  (user)=> {
    this.first_name     =user.first_name;
    this.last_name      =user.last_name;
    this.email          =user.email;
    this.phone          =user.phone;
    this.status         =user.status 
    this.created_at     =new Date()

}


module.exports = User


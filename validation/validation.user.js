const express = require('express')
const joi = require('joi')
const { validate, ValidationError, Joi } = require('express-validation')


exports.userValidation = {
    body: Joi.object({
        first_name: joi.string()
            .required(),
        last_name: joi.string()
            .required(),
        username: joi.string()
            .required(), 
        email: Joi.string()
            .email()
            .required(),
         password: joi.string()
            .required(), 
    }),
  }










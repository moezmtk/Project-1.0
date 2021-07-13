const { verifySignUp } = require("../Middleware/verifySignUp")
const controller = require("../controllers/auth.signUp.signIn")
const express = require('express')
const router = express.Router()


  router.post("/signup",
    [
      verifySignUp.checkDuplicate,
      verifySignUp.checkRolesExisted
    ],
    controller.signup
  )

  router.post("/signin", controller.signin)
  module.exports = router












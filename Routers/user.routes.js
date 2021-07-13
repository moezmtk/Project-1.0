
const express = require('express')
const router = express.Router()
const { authJwt } = require("../Middleware/authJwt")
const controller = require("../controllers/user.controller")


router.get("/all", controller.allAccess)

router.get(
    "/user",
    [authJwt.verifyToken],
    controller.userBoard
  )

  router.get(
    "/moderator",
    [authJwt.verifyToken, authJwt.isModerator],
    controller.moderatorBoard
  )

  router.get(
    "/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  )


module.exports = router













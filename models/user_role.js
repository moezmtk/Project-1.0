
const sequelize = require("../config/db.config")
const Sequelize = require("sequelize")




const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.user = require("../models/user.model")
db.role = require("../models/role.model")


db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
})
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
})

db.ROLES = ["user", "admin", "moderator"]

module.exports = db













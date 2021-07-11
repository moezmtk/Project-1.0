const { DataTypes } = require('sequelize')
const express = require('express')
const User = require('../models/user.model')



  exports.delete = async (req, res) => {
    try {
        await User.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "User Deleted"
        });
    } catch (err) {
        console.log(err);
    }
}
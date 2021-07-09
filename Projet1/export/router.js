
const express = require('express')
const router = express.Router()

const deleteElement = require('./delete.element')
const deepClone = require ('./deep.clone')
const subString = require('./sub.string')
const groupByProperty = require ('./group.by.property')
const firstUpper = require ('./first.upper')

router.get('/firstUpper/:str1',firstUpper)
router.get('/groupByProperty/:prop',groupByProperty)
router.get('/subString/:str4/:str5',subString)
router.get('/deepClone',deepClone)
router.get('/deleteElement/:index',deleteElement)


module.exports = router

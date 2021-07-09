
const express = require('express')
const router = express.Router()

const deleteElements = require('./delete.element')
const deepClones = require ('./deep.clone')
const subStrings = require('./sub.string')
const groupByPropertys = require ('./group.by.property')
const firstUppers = require ('./first.upper')

router.get('/firstUpper/:str1',firstUppers.firstUpper)
router.post('/groupByProperty/:prop',groupByPropertys.groupByProperty)
router.get('/subString/:str4/:str5',subStrings.subString)
router.post('/deepClone',deepClones.deepClone)
router.post('/deleteElement/:index',deleteElements.deleteElement)


module.exports = router

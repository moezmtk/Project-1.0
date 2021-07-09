
const express = require('express')
const router = express.Router()

const deleteElements = require('./Controllers/delete.element')
const deepClones = require ('./Controllers/deep.clone')
const subStrings = require('./Controllers/sub.string')
const groupByPropertys = require ('./Controllers/group.by.property')
const firstUppers = require ('./Controllers/first.upper')

router.get('/firstUpper/:str1',firstUppers.firstUpper)
router.post('/groupByProperty/:prop',groupByPropertys.groupByProperty)
router.get('/subString/:str4/:str5',subStrings.subString)
router.post('/deepClone',deepClones.deepClone)
router.post('/deleteElement/:index',deleteElements.deleteElement)


module.exports = router

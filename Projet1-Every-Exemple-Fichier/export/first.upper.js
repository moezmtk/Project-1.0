const express = require('express')



exports.firstUpper = (req,res)=>{
    let str2 = req.params.str1
    str2 = str2.charAt(0).toUpperCase() + str2.slice(1)
    res.json({result: str2})
    console.log(str2)

}

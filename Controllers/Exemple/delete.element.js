const express = require('express')



//const array = [1,2,3,4,5]
exports.deleteElement = (req,res)=>{
    //var array = [1,2,3,4]
    let array = req.body
    console.log(array)
    const index = req.params.index
    array.splice(index,1)
    res.json({result:array}) 
    console.log(array)
}

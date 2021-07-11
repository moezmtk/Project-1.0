const express = require('express')


exports.groupByProperty = (req,res)=>{
    
    //const array = [{name:'test'},{name:'test'},{name:'test1'},{name:'test12'},{name:'test12'}]
    //exemple : [{"name":"test"},{"name":"test"},{"name":"test1"},{"name":"test12"},{"name":"test12"}]
    const array = req.body
        
    const prop = req.params.prop
    function groupBy(objectArray, property) {
        return objectArray.reduce((acc, obj)=> {
        const key = obj[property]
        if (!acc[key]) {
            acc[key] = []
        }
        acc[key].push(obj)
        return acc
        }, {})
    }
const result = groupBy(array,prop)
res.json({result:result})
console.log(result)
}

  






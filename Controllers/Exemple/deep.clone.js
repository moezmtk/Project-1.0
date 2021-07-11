const express = require('express')

/*const obj1 = {
    nom = 'moez',
    prenom = 'barhoumi'
}*/
exports.deepClone = (req,res)=>{
    
    //const obj1 = {firstName: "James", lastName: "Bond", age: 9}
    //exemple : {"firstName": "James", "lastName": "Bond", "age": 9}
    const obj1 = req.body  
    const obj2 = Object.assign({},obj1)
    res.json({result:obj2})
    console.log('obj1 = ',obj1)
    console.log('obj2 = ',obj2)

}
const express = require('express')
const bodyParser = require('body-parser')
const db = require('./Config/db.config')
const router = require('./Routers/router')


const app = express()

const port = process.env.port || 3000

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const http = require('http');
http.createServer((req, res)=> {
})



app.use('/',router)
app.listen(port,()=>{
    console.log(`Express server is running at port ${port}`)
})


try {
    db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }






















/*
//work
app.get('/firstUpper/:str1',(req,res)=>{
    let str2 = req.params.str1
    str2 = str2.charAt(0).toUpperCase() + str2.slice(1)
    res.json({result: str2})
    console.log(str2)

})
//work
app.post('/deleteElement/:index',(req,res)=>{
    //var array = [1,2,3,4]
    let array = req.body
    console.log(array)
    const index = req.params.index
    array.splice(index,1)
    res.json({result:array}) 
    console.log(array)
})
//work
app.post('/deepClone',(req,res)=>{
    
    //const obj1 = {firstName: "James", lastName: "Bond", age: 9}
    //exemple : {"firstName": "James", "lastName": "Bond", "age": 9}
    const obj1 = req.body  
    const obj2 = Object.assign({},obj1)
    res.json({result:obj2})
    console.log('obj1 = ',obj1)
    console.log('obj2 = ',obj2)

})

//work
app.get('/subString/:str4/:str5',(req,res)=>{
    //exemple str4="test",str5="tes"
    const str4 = req.params.str4
    const str5 = req.params.str5
    if(str4.includes(str5)){
        console.log(str5 ,'sub string of ', str4)
        res.json({status:true})
    }else{
        console.log(str5 ,'not sub string of ', str4)
        res.json({status:false})
    }

})

//work
app.post('/groupByProperty/:prop',(req,res)=>{
    
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
})*/











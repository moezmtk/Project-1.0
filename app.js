const express = require('express')
const bodyParser = require('body-parser')


const app = express()
const port = process.env.port || 3000


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.post('/firstUpper/:str1',(req,res)=>{
    const str2 = req.params.str1
    str2 = str2.charAt(0).toUpperCase() + str2.slice(1)
    res.json({test: str2})
    res.send(str2)

})

app.post('/deleteElement/:array/:index',(req,res)=>{
    const array = req.params.array
    const index = req.params.index
    array = array.splice(index,1)
    res.json({result:array})
    res.send(array)
})

app.post('/deepClone/:obj',(req,res)=>{
    const obj1 = req.params.obj
    const obj2 = Object.assign({},obj1)
    res.json({result:obj2})
    res.send(obj2)

})

app.post('/groupByProperty/:array/:prop',(req,res)=>{
    const array = req.params.array
    const prop = req.params.prop
    function groupBy(objectArray, property) {
        return objectArray.reduce(function (acc, obj) {
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
    res.send(result)
})

app.post('/subString/:str4/:str5',(req,res)=>{
    const str4 = req.params.str4
    const str5 = req.params.str5
    if(str4.includes(str5)){
        console.log(str5 ,'sub string of ', str4)
        res.json({status:true})
    }else{
        res.send(str5 ,'not sub string of ', str4)
        res.json({status:false})
    }

})




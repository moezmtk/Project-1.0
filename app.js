const express = require('express')
const bodyParser = require('body-parser')


const app = express()
const port = process.env.port || 3000


app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const http = require('http');
http.createServer((req, res)=> {
})

app.listen(port,()=>{
    console.log(`Express server is running at port ${port}`)
})


//ye5dem
app.get('/firstUpper/:str1',(req,res)=>{
    let str2 = req.params.str1
    str2 = str2.charAt(0).toUpperCase() + str2.slice(1)
    res.json({result: str2})
    console.log(str2)

})

app.get('/deleteElement/:array/:index',(req,res)=>{
    let array = req.params.array
    const index = req.params.index
    array = array.splice(index,1)
    res.json({result:array})
    console.log(array)
})

app.get('/deepClone/:obj',(req,res)=>{
    const obj1 = req.params.obj
    const obj2 = Object.assign({},obj1)
    res.json({result:obj2})
    console.log(obj2)

})

app.get('/groupByProperty/:array/:prop',(req,res)=>{
    const array = req.params.array
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
})
//ye5dem
app.get('/subString/:str4/:str5',(req,res)=>{
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









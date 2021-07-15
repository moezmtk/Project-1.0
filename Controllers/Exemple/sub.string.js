const express = require('express')

/*const str = 'Arya Stark';

str.includes('Stark'); // true
str.includes('Snow'); // false*/

exports.subString = (req,res)=>{
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
    
}



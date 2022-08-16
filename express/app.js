const express = require('express');

//console.log(express);

const app = express();

app.get('/',(req,res)=>{
    res.json(
        {
            "name":"Khairul Islam",
            "email":"khairulshagor@outlook.com",
        }
    );
})

app.get('/path',(req,res)=>{
    console.dir(req.path)
    //res.send(req.ip);
})


const PORT = process.env.PORT || 8080;
app.listen(PORT,()=>{
    console.log(`Server is running ${PORT}`);
});
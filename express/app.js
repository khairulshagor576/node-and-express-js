const express = require('express');
const morgan = require('morgan');

//console.log(express);

const app = express();
//app.use(morgan('dev'));

function myCustomMiddleware(req,res,next)
{
    //console.log(req.url);
    if(req.url=='/path'){
     res.send("<h1>This page is blocked by admin user</h1>");
    }
    //console.log("I am Logged");
    next();
}
app.use(myCustomMiddleware);

app.get('/',(req,res)=>{
    res.json(
        {
            "name":"Khairul Islam",
            "email":"khairulshagor@outlook.com",
        }
    );
})

app.get('/path',(req,res)=>{
    //console.dir(req.path)
    res.send("<h1>This is path page</h1>");
})


const PORT = process.env.PORT || 8080;
app.listen(PORT,()=>{
    console.log(`Server is running ${PORT}`);
});
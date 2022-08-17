const express = require('express');
const morgan = require('morgan');


//console.log(router);

//console.log(express);

const app = express();
const router = express.Router();
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

function tinnyLogger()
{
    return (req,res,next)=>{
      console.log(`${req.method}-${req.url}`);
      next();
    }
}

const middleware = [myCustomMiddleware,tinnyLogger()];
app.use(middleware);

app.get('/',(req,res)=>{
    res.json(
        {
            "name":"Khairul Islam",
            "email":"khairulshagor@outlook.com",
        }
    );
})
//Router starts
router.get('/login',(req,res)=>{
    res.send("I am login router!");
});

router.get('/logout',(req,res)=>{
    res.send("I am logout router!");
});

router.get('/signup',(req,res)=>{
    res.send("I am signup router!");
});
//Router ends

app.use('/user',router);

app.get('/path',(req,res)=>{
    //console.dir(req.path)
    res.send("<h1>This is path page</h1>");
})


const PORT = process.env.PORT || 8080;
app.listen(PORT,()=>{
    console.log(`Server is running ${PORT}`);
});
const express    = require('express');
const morgan     = require('morgan');
const userRouter = require('./router');
const postRouter = require('./postRoute')


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

/*--------------------------
parameter provide with path:
------------------------------*/ 
app.get("/post/:postId",(req,res)=>{
   // console.log(req.params);
    res.send("I am listening!"+req.params.postId);
})

/*--------------------------======
Multi parameter provide with path:
------------------------------=====*/ 
app.get("/products/:prodId/reviews/:reviewId",(req,res)=>{
    console.log(req.params);
    res.send("Product id is: "+req.params.prodId+" "+"Review id is "+req.params.reviewId);
});

/*--------------------------------------
Extract query string from route or path:
------------------------------------------*/ 

app.get('/data',(req,res)=>{
    let {category,price,type} = req.query;
    //console.log(req.query);
    res.send(category+" "+price+" "+type);
})

app.get("/contact",(req,res)=>{
   res.send("<h2>This is Contact Page</h2>");
});

app.get('/about',(req,res)=>{
   res.send("<h3>This is About Page</h3>");
});

app.use('/user',userRouter);
app.use('/posts',postRouter);

app.get('/path',(req,res)=>{
    //console.dir(req.path)
    res.send("<h1>This is path page</h1>");
})


const PORT = process.env.PORT || 8080;
app.listen(PORT,()=>{
    console.log(`Server is running ${PORT}`);
});
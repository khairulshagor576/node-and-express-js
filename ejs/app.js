
const express = require('express');
const morgan = require('morgan');

const app = express();

app.set('view engine','ejs');

app.use(morgan('dev'));
app.use(express.urlencoded({extend:true}));
app.use(express.json());

let post = {
    title:"I am a Post",
    body:"This is a post body",
    published:true,
    author:"Khairul Islam"
}

const posts =[
    {title:"title 1",author:"khairul"},
    {title:"title 2",author:"nasir"},
    {title:"title 3",author:"rakib"},
    {title:"title 4",author:"sultan"},
]

app.get('/about',(req,res)=>{
    res.render('pages/about');
})

app.get('/profile',(req,res)=>{
    res.render('pages/profile');
})

app.get('/',(req,res)=>{
    res.render('pages/index',{title:"This is EJS language and it's awesome",post,posts});
})

const PORT = process.env.PORT || 8080;
app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`)
});
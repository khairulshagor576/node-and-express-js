
const express = require('express');
const morgan = require('morgan');

const app = express();

app.set('view engine','ejs');

app.use(morgan('dev'));
app.use(express.urlencoded({extend:true}));
app.use(express.json());

app.get('/',(req,res)=>{
    res.render('index');
})

const PORT = process.env.PORT || 8080;
app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`)
});
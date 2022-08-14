const express = require('express');

//console.log(express);

const app = express();

app.get('/',(req,res)=>{
    res.send("hello, Khairul islam");
})

const PORT = process.env.PORT || 8080;
app.listen(PORT,()=>{
    console.log(`Server is running ${PORT}`);
});
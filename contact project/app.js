
const express = require ('express');
const morgan = require ('morgan');

const contactRoute = require('./contactRouter')

const app = express();
app.use(morgan('dev'));

app.use('/contacts',contactRoute);

app.get('*',(req,res)=>{
    res.send("<h3>Please Use the right Route</h3>");
});

const PORT = process.env.PORT || 8080
app.listen(PORT,()=>{
    console.log(`Server is running Successfully! at ${PORT}`);
});
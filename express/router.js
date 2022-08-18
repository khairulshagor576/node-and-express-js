const router = require('express').Router();

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

module.exports = router;
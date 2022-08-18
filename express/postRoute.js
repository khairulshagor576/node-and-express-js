const postRoute = require('express').Router();

postRoute.get("/",(req,res)=>{
    res.send("<h3>Render All Posts</h3>");
});

postRoute.get("/",(req,res)=>{
    res.send("<h3>Create a New Post</h3>");
});

module.exports = postRoute;
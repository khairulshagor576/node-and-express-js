
const fs = require('fs');
const testObj = require('./test.js');
const { stringify } = require('querystring');

// const testObj={
//     name:"Khairul Islam",
//     mail:"khairulshagor@outlook.com",
//     number:01703302740,
//     address:{
//         city:"Dhaka City",
//         Country:"Bangladesh"
//     }
// }

let data = JSON.stringify(testObj);

fs.writeFile('test.json',data,(err)=>{
  if(err)
  {
    console.log(err);
  }else{
    console.log("File Writes Successfully!");
  }
});
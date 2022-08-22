const path = require('path');
const currentFile = __filename;

//console.log(path.basename(currentFile));

const pathObj = {
    dir:'user/local',
    name:'userText',
    ext:'.js'
}

console.log(path.format(pathObj));
const fs = require('fs'); 

console.log(typeof fs); 

fs.writeFile('./hello.txt', 'Hello!', function(){
    console.log('done creating file')
}); 


const fs = require('fs'); 

console.log(typeof fs); 

fs.writeFile('./hello.txt', 'Hello!', function(){
    console.log('done creating file')
}); 

console.log(module); 


let daysOfWeek = require('./days-of-week'); 

console.log(daysOfWeek); 
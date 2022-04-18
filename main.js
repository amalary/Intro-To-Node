const fs = require('fs'); 

console.log(typeof fs); 

fs.writeFile('./hello.txt', 'Hello!', function(){

    console.log('done creating file')

}); 

console.log(module); 


let daysOfWeek = require('./days-of-week'); 

console.log(daysOfWeek); 

let daysOfWeek = require('./days-of-week'); 

let day = daysOfWeek.getWeekday(5);

console.log(day); 

let daysOfWeek = require('./days-of-week'); 


let day = daysOfWeek.getWeekday(4);

let weekend = daysOfWeek.isWeekend(4); 

console.log(weekend); 

console.log(day); 

// const request = require('request');
// request( 'http://jsonplaceholder.typicode.com/users', function(err, res, body) {
// console.log(body); }
// );

let randomHello = require('./random'); 

let randomGreeting = randomHello.sayHello(); 



console.log(randomGreeting); 

let greetingHello = require('./hello'); 

console.log(greetingHello); 

let greet = greetingHello.sayHello(); 

console.log(greet); 

let randomNum = require('./random'); 

let randomGen = randomNum.randomNumber(200,100); 

console.log(randomGen)

let greeting = randomNum.sayHello('Anthony')

console.log(greeting)

let circle = require('./circle'); 

let circleArea = circle.circleArea(4)

console.log(circleArea)

let circleCircumf = circle.circumference(5); 

console.log(circleCircumf)
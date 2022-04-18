const random = require('./random')


function randomNumber(a,b){

    return Math.floor(Math.random() * (a - b + 1 )) + b ;
}; 

function sayHello(name){

    return`Hello ${name} how have you been?`
}





module.exports = {
    randomNumber,
    sayHello
}
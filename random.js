const random = require('./random')


function randomNumber(a,b){

    return Math.floor(Math.random() * (a - b + 1 )) + b ;
}; 




module.exports = {
    randomNumber 
}
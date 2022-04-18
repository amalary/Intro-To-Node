const circle = require('./circle'); 

function circleArea(radius){

    return (radius**2) * Math.PI

}

function circumference(radius){

    return (radius * 2) * Math.PI
}



module.exports = {
    circleArea, 
    circumference
}
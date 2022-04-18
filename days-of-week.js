const weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']; 

function getWeekday(dayNo){
    if(dayNo < 0 || dayNo > 6) dayNo = 0; 
    return weekdays[dayNo]; 
}

function isWeekend(dayNo){
    if(dayNo === 0 || dayNo == 6){
        return 'This is weekend'
    }else{
        return 'This is not the weekend !'
    }
}

module.exports = {
    getWeekday,
    isWeekend
}
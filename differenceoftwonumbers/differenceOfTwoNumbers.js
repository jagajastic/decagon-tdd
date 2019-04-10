
function checkNumbers(number){
    if(typeof(number) !== "number"){
        return false;
    }
    return true;
}

module.exports.differenceOfTwoNumbers = function(number1,number2){
    if(checkNumbers(number1) && checkNumbers(number2)){
        return number1 - number2;
    }
    return false;
}
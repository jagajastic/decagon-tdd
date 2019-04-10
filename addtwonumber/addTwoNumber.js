
 function checknumber(number){
    if(typeof(number) !== "number") {
        return false;
    }
    return true;
 }
 
 module.exports.addTwoNumber = function (number1, number2){
   if(checknumber(number1) && checknumber(number2)) {
        return number1 + number2;
    }
    return false;
};



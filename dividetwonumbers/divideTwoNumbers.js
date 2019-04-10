
function checkNumber(number){
    typeof(number) !== 'number'? false : true;
}


module.exports.divideTwoNumbers = function(number1, number2){
    checkNumber(number1) && checkNumber(number2)? false: "";
    return (number2 / number1);
}

function checkAndMultiply(arrOfIndefiniteNumber){
    var multipleOfnumber = 1;
    for(var i=0; i < arrOfIndefiniteNumber.length; i++){
        if(typeof(arrOfIndefiniteNumber[i]) !== "number"){
        return false;
        }
        multipleOfnumber *= arrOfIndefiniteNumber[i];
    }
    return multipleOfnumber;
}

module.exports.multipleOfIndefiniteNumbers = function(...indefinite){
    return checkAndMultiply(indefinite);
}

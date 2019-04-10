
function checkAndSumNumber(arrOfNumbers){
    var sumOfIdefiniteNumber = 0;
    for(var i=0; i < arrOfNumbers.length; i++){
        if(typeof(arrOfNumbers[i]) !== "number"){
            return false;
        }
        sumOfIdefiniteNumber +=arrOfNumbers[i];
    }
    return sumOfIdefiniteNumber;
}

module.exports.addIndefiniteNumber = function(...indefinite){
    return checkAndSumNumber(indefinite);
}
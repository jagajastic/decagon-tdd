function checkString(string){
    if(typeof(string) !== "string"){
        return false;
    }
    return true;
}

module.exports.concatenateTwoString = function(string1, string2){
    if(checkString(string1) && checkString(string2)){
        return (string1 +' '+ string2);
    }
    return false;
}
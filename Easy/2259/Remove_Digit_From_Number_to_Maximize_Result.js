/**
 * Remove Digit From Number to Maximize Result
 */
var removeDigit = function(number, digit) {
    let lastIndex=-1;
    for (let i = 0; i < number.length; i++) {
        if(number[i]==digit && i+1<number.length && parseInt(number[i+1])>parseInt(number[i])){
            return number.slice(0,i)+number.slice(i+1);
        }
        if(number[i]==digit){
            lastIndex=i;
        }
    }
    return number.slice(0,lastIndex)+number.slice(lastIndex+1);
};
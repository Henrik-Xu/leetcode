/**
 * Fraction to Recurring Decimal
 */
var fractionToDecimal = function(numerator, denominator) {
    if(numerator==0){
        return '0';
    }
    if(numerator%denominator==0){
        return ''+numerator/denominator;
    }
    let res='';
    if((numerator>0)^(denominator>0)){
        res+='-';
    }
    numerator=Math.abs(numerator),denominator=Math.abs(denominator);
    if(numerator>denominator){
        res+=parseInt(numerator/denominator);
    }else{
        res+='0';   
    }  
    res+='.';
    numerator=numerator%denominator;
    let map=new Map();
    map.set(numerator,res.length);
    while (numerator!=0) {
        numerator=numerator*10;
        if(numerator>denominator){
            res+=parseInt(numerator/denominator);
        }else{
            res+='0';   
        }  
        numerator=numerator%denominator;
        if(map.has(numerator)){
            res=res.slice(0,map.get(numerator))+'('+res.slice(map.get(numerator))+')';
            break;
        }else{
            map.set(numerator,res.length);
        }
    }
    return res;
};
let numerator = 1, denominator = 2;
let res=fractionToDecimal(numerator,denominator);
console.log(res);
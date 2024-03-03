/**
 * String to Integer (atoi)
 */
var myAtoi = function(s) {
    let index=0,max_int=Math.pow(2,31)-1,min_int=Math.pow(-2,31);
    while (s.charAt(index)==' ' && index<s.length) {
        index++;
    }
    let sign=1;
    if(s.charAt(index)== '-'){
        sign=-1;
        index++;
    }else if(s.charAt(index)=='+'){
        index++;
    }
    let digit=0;
    while(index<s.length && s.charAt(index)>='0' && s.charAt(index)<='9'){
        let num=parseInt(s.charAt(index));
        if(digit>parseInt(max_int/10) || (digit==parseInt(max_int/10) && max_int%10<num)) return sign==1?max_int:min_int;  //overflow check
        digit=digit*10+num;
        index++;
    }
    digit=digit*sign;
    return digit;
};

let s =
"2147483648";
let res =myAtoi(s);
console.log(res)
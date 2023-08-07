/**
 * Second Largest Digit in a String
 */
var secondHighest = function(s) {
    let first=-1,second=-1;
    for (let i = 0; i < s.length; i++) {
        if(isNaN(s[i]))continue;
        let n=parseInt(s[i]);
        if(n>first){
            second=first;
            first=n;
        }else if(n>second && n!=first){
            second=n;
        }
    }
    return second;
};
let s="dfa12321afd";
let res=secondHighest(s);
console.log(res);
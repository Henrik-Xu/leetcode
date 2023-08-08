/**
 * Replace All Digits with Characters
 */
var replaceDigits = function(s) {
  let sb='';
  for (let i = 0; i < s.length; i++) {
    if(isNaN(s[i])){
        sb+=s[i];
    }else{
        sb+=String.fromCharCode(s[i - 1].charCodeAt() + parseInt(s[i]));
    }
  }  
  return sb;
};
let s="a1c1e1";
let res=replaceDigits(s);
console.log(res);
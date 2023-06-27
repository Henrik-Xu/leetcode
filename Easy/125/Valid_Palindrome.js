/**
 * Valid Palindrome
 */
let isPalindrome = function(s) {
    if(!s)return true;
    let start=0,end=s.length-1;
    while (start<=end) {
        let a=s[start].toLowerCase().charCodeAt(0);
        let b=s[end].toLowerCase().charCodeAt(0); 
        if(a<48 || (a>57&&a<97) || a>122){
            start++;
            continue;
        }
        if(b<48 || (b>57&&b<97) || b>122){
            end--;
            continue;
        }
        if(s[start++].toLowerCase()!=s[end--].toLowerCase()){
            return false;
        }
    }
    return true;
};
let s = '0P';
let res=isPalindrome(s);
console.log(res);
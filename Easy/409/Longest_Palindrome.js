/**
 * Longest Palindrome
 */
let longestPalindrome = function(s) {
    if(s==null || s.length==0) return 0;
    let set = new Set();
    let count = 0;
    for(let i=0; i<s.length; i++){
        if(set.has(s.charAt(i))){
            set.delete(s.charAt(i));
            count++;
        }else{
            set.add(s.charAt(i));
        }
    }
    if(set.size!=0) return count*2+1;
    return count*2;
};
let s = "abccccdd";
let res=longestPalindrome(s);
console.log(res);
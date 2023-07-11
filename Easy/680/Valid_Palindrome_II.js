/**
 * Valid Palindrome II
 */
let validPalindrome = function(s) {
    let low=0,high=s.length-1;
    while (low<high) {
        if(s[low]!=s[high]){
           return isPalindrome(s,low+1,high) || isPalindrome(s,low,high-1);
        }
        low++;
        high--;
    }
    return true;
};

let isPalindrome = function (s, i, j) {
    while (i < j) {
        if (s[i] != s[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
}
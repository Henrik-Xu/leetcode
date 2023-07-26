/**
 * Remove Palindromic Subsequences
 */
let removePalindromeSub = function(s) {
    let i=0,j=s.length-1;
    while (i<=j) {
        if(s[i]==s[j]){
            i++;
            j--;
        }else{
            return 2;
        }
    }
    return 1;
};
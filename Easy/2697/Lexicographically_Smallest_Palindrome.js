/**
 * Lexicographically Smallest Palindrome
 */
var makeSmallestPalindrome = function(s) {
    let i=0,j=s.length-1;
    let arr=s.split('');
    while (i<j) {
        if(arr[i]!=arr[j]){
            if(arr[i].charCodeAt()>arr[j].charCodeAt()){
                arr[i]=arr[j];
            }else{
                arr[j]=arr[i];
            }
        }
        i++;
        j--;
    }
    return arr.join('');
};
let s="abcd";
let res=makeSmallestPalindrome(s);
console.log(res);
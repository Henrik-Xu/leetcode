/**
 * Reverse Vowels of a String
 */
let reverseVowels = function(s) {
    if(s == null || s.length==0) return s;
    let vowels = "aeiouAEIOU";
    let start = 0;
    let end = s.length-1;
    let arr=s.split('');
    while(start<end){
        while(start<end && !vowels.includes(arr[start]+"")){
            start++;
        }
        while(start<end && !vowels.includes(arr[end]+"")){
            end--;
        }
       [arr[start],arr[end]]=[arr[end],arr[start]];
        start++;
        end--;
    }
    return arr.join('');
};
let  s = "hello";
let res=reverseVowels(s);
console.log(res);
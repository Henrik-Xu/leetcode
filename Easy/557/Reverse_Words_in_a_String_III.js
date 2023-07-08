/**
 * Reverse_Words_in_a_String_III.js
 */
let reverseWords = function(s) {
    let arr=s.split(' ');
    let sb='';
    for (let i = 0; i < arr.length; i++) {
        sb+=swap([...arr[i]],0,arr[i].length-1);
        if(i<arr.length-1){
            sb+=' ';
        }
    }
    return sb;
};
let swap=function(arr,l,r){
    while (l<r) {
        [arr[l],arr[r]]=[arr[r],arr[l]];
        l++;
        r--;
    }
    return arr.join('');
}
let s="Let's take LeetCode contest";
let res=reverseWords(s);
console.log(res);

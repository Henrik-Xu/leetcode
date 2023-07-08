/**
 * Reverse String II
 */
let reverseStr = function(s, k) {
    let arr=[...s];
    let n=s.length;
    let i=0;
    while (i<n) {
        let j=Math.min(i+k-1,n-1);
        swap(arr,i,j);
        i+=2*k;
    }
    return arr.join('');
};
let swap=function(arr,l,r) {
    while (l<r) {
        [arr[l],arr[r]]=[arr[r],arr[l]];
        l++;
        r--;
    }
}
let s = "abcd", k = 2;
let res=reverseStr(s,k);
console.log(res);
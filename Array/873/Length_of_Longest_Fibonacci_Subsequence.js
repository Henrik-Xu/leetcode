/**
 * Length of Longest Fibonacci Subsequence
 */
let lenLongestFibSubseq = function(arr) {
    let set=new Set(arr);
    let res=2;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            let a=arr[i],b=arr[j],l=2;
            while (set.has(a+b)) {
                b=a+b;
                a=b-a;
                l++;
            }
            res=Math.max(res,l);
        }
    }
    return res>2?res:0;
};
let arr = [1,2,3,4,5,6,7,8];
let res=lenLongestFibSubseq(arr);
console.log(res);
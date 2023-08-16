/**
 * Find Subsequence of Length K With the Largest Sum
 */
var maxSubsequence = function(nums, k) {
    let m=nums.length,n=2;
    let arr=new Array(m);
    for(let i=0;i<m;i++){
        arr[i]=[nums[i],i];
    }
    arr.sort((a,b)=>b[0]-a[0]);
    let maxK=arr.slice(0,k);
    maxK.sort((a,b)=>a[1]-b[1]);
    let res=[];
    for(let i=0;i<k;i++){
        res.push(maxK[i][0]);
    }
    return res;
};
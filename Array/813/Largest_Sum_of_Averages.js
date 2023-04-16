/**
 * Largest Sum of Averages
 */
let largestSumOfAverages = function(nums, k) {
    let N=nums.length;
    let memo=new Array(N+1).fill(0).map(()=>new Array(N+1).fill(0));
    let cur=0;
    for (let i = 0; i <N; i++) {
        cur+=nums[i];
        memo[i+1][1]=cur/(i+1);
    }
    return search(N,k,nums,memo);
};
let search=function(n,k,nums,memo){
    if(memo[n][k]!=0)return memo[n][k];
    if(n<k)return 0;
    let cur=0;
    for (let i = n-1; i >0; i--) {
        cur+=nums[i];
        memo[n][k]=Math.max(memo[n][k],search(i,k-1,nums,memo)+cur/(n-i));
    }
    return memo[n][k];
}
let nums = [9,1,2,3,9], k = 3;
let res=largestSumOfAverages(nums,k);
console.log(res);
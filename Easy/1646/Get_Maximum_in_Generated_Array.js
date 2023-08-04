/**
 * Get Maximum in Generated Array
 */
var getMaximumGenerated = function(n) {
    if(n<=1)return n;
    let nums=new Array(n+1).fill(0);
    nums[0]=0,nums[1]=1,max=1;
    for (let i = 1; (2*i+1) <=n; i++) {
        nums[2*i]=nums[i];
        nums[2*i+1]=nums[i]+nums[i+1];
        max=Math.max(max,nums[2*i+1]);
    }
    return max;
};
let n=2;
let res=getMaximumGenerated(n);
console.log(res);
/**
 * Check if Array is Good
 */
var isGood = function(nums) {
    let n=nums.length;
    let map=new Map(),max=-1;
    for(let i=0;i<n;i++){
        max=Math.max(max,nums[i]);
        map.set(nums[i],map.get(nums[i])+1||1);
    }
    for (let i = 1; i <n-1; i++) {
       if(!map.has(i) || map.get(i)!=1) return false;
    }
    if(!map.has(n-1) || map.get(n-1)!=2) return false;
    return true;
};
let nums =
[1, 3, 3, 2];
let res=isGood(nums);
console.log(res);
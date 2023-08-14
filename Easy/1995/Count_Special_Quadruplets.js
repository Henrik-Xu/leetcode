/**
 * Count Special Quadruplets
 */
var countQuadruplets = function(nums) {
    let result=0;
    let n=nums.length;
    let map=new Map();
    for(let i=n-2;i>=1;i--){
        for (let j = i+1; j < n; j++) {
            let num=nums[j]-nums[i];
            map.set(num,map.get(num)+1||1);
        }
        for (let j = i-2; j >= 0; j--) {
            let num=nums[j]+nums[i-1];
            result+=map.get(num)||0;
        }
    }
    return result;
};
let nums = [1,1,1,3,5];
let res=countQuadruplets(nums);
console.log(res);
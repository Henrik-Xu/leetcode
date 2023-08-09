/**
 * Sum of All Subset XOR Totals
 */
var subsetXORSum = function(nums) {
    return backtracking(nums,0,0);
};
let backtracking=function(nums,index,sum){
    if(index==nums.length){
        return sum;
    }
    let withElement=backtracking(nums,index+1,sum^nums[index]);
    let withoutElement=backtracking(nums,index+1,sum);
    return withElement+withoutElement;
}
let nums=[3,4,5,6,7,8];
let res=subsetXORSum(nums);
console.log(res);
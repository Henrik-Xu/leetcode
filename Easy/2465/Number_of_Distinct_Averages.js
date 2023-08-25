/**
 * Number of Distinct Averages
 */
var distinctAverages = function(nums) {
    nums.sort((a,b)=>a-b);
    let low=0,high=nums.length-1;
    let set=new Set();
    while(low<high){
        set.add(nums[low]+nums[high]);
        low++;
        high--;
    }
    return set.size;
};
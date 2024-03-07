/**
 * 3Sum Closest
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a,b)=>a-b);
    let distance,min;
    for (let i = 0; i+2 < nums.length; i++) {
       if(i>0 && nums[i]===nums[i-1]) continue;
       let l = i+1, r = nums.length-1;
       while(l<r){
           let sum = nums[i]+nums[l]+nums[r];
           if(sum===target) return sum;
           if(sum>target){
               if(distance===undefined || distance>sum-target){
                   distance=sum-target;
                   min = sum;
               }
               r--;
           }else{
            if(distance===undefined || distance>target-sum){
                distance=target-sum;
                min = sum;
            }
            l++;
           }
       }
    }
    return min;
};
let nums = [-1,2,1,-4], target = 1;
let res=threeSumClosest(nums, target);
console.log(res);
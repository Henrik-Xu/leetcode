/**
 * Longest Alternating Subarray
 */
var alternatingSubarray = function(nums) {
    let res=-1;
    for (let i = 0; i < nums.length; i++) {
        let count=1,j=i,index=1;
        while(j+1<nums.length && nums[j+1]-nums[j]==index){  
            j++;
            index*=-1;
            count++;
        }
        res=count==1?res:Math.max(res,count);
    }
    return res;
};
let nums =
[2,3,4,3,4];
let res=alternatingSubarray(nums);
console.log(res);
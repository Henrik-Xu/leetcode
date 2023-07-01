/**
 * Contains Duplicate
 */
let containsDuplicate = function(nums) {
    let set=new Set(nums);
    return set.size==nums.length;
};
let nums = [1,2,3,1];
let res=containsDuplicate(nums);
console.log(res);6
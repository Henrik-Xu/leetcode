/**
 * Range Sum Query - Immutable
 */
let NumArray = function(nums) {
    this.nums=nums;
    for (let i = 1; i < nums.length; i++) {
        this.nums[i]+=nums[i-1];
    }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    if(left==0){
        return this.nums[right];
    }
    return this.nums[right]-this.nums[left-1];
};

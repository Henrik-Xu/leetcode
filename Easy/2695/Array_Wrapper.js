/**
 * Array Wrapper
 */
var ArrayWrapper = function(nums) {
    this.nums=nums;
};

ArrayWrapper.prototype.valueOf = function() {
    return this.nums.reduce((sum,current)=>sum+current,0);
}

ArrayWrapper.prototype.toString = function() {
    return `[${this.nums}]`;
}

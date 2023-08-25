/**
 * Number of Unequal Triplets in Array
 */
var unequalTriplets = function(nums) {
    let ans = 0, prev = 0, count =new Map();
    let next=nums.length;
    for (const num of nums) {
        count.set(num, (count.get(num) || 0) + 1);
    }
    for (const freq of count.values()) {
        next-=freq;
        ans+=prev*freq*next;
        prev+=freq;
    }
    return ans;
};
let nums = [4,4,2,4,3];
let res=unequalTriplets(nums);
console.log(res);
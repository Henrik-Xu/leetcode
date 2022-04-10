/**
 * Total Hamming Distance
 * The Hamming distance between two integers is the number of positions at which the corresponding bits are different.
 * Given an integer array nums, return the sum of Hamming distances between all the pairs of the integers in nums.
 * Constraints:
 * 1 <= nums.length <= 104
 * 0 <= nums[i] <= 109
 * The answer for the given input will fit in a 32-bit integer.
 */
let totalHammingDistance = function(nums) {
    let total = 0, n = nums.length; 
    for (let i = 0; i < 32; i++) {
        let bitCount = 0;
        for (const num of nums) {
            bitCount+=(num>>i)&1;
        }
        total += bitCount * (n-bitCount);
    }
    return total;
};
let nums = [4,14,2];
let res = totalHammingDistance(nums);
console.log(res);
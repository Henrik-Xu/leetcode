/**
 * K-diff Pairs in an Array
 * Given an array of integers nums and an integer k, return the number of unique k-diff pairs in the array.
 * A k-diff pair is an integer pair (nums[i], nums[j]), where the following are true:
 *  0 <= i, j < nums.length
 *  i != j
 *  nums[i] - nums[j] == k
 *  Notice that |val| denotes the absolute value of val.
 */

/**
 * Count the elements with Counter
 * If k > 0, for each element i, check if i + k exist.
 * If k == 0, for each element i, check if count[i] > 1
 */
let findPairs = function(nums, k) {
    let map = new Map();
    for (const num of nums) {
        if(map.has(num)){
            map.set(num,map.get(num)+1);
        }else{
            map.set(num,1);
        }
    }
    let res = 0;
    for (const key of map.keys()) {
        if(k>0 && map.has(key+k) || (k==0 && map.get(key)>1)){
            res++;
        }
    }
    return res;
};
let nums = [1,3,1,5,4], k = 0;
let res = findPairs(nums,k);
console.log(res);
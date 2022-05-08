/**
 * Contiguous_Array
 */
let findMaxLength = function(nums) {
    let map = new Map();
    map.set(0,-1);
    let maxLen = 0, count = 0;
    for (let i = 0; i < nums.length; i++) {
        count+= nums[i] == 1? 1:-1;
        if(map.has(count)){
            maxLen = Math.max(maxLen,i-map.get(count));
        }else{
            map.set(count,i);
        }
    }
    return maxLen;
};
let nums = [0,1,0];
let res = findMaxLength(nums);
console.log(res);
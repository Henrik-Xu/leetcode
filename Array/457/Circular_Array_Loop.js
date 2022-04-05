/**
 * Circular Array Loop
 * Follow up: Could you solve it in O(n) time complexity and O(1) extra space complexity?
 */
let getIndex = function(i,nums){
    let n = nums.length;
    let val = i+nums[i];
    return val>=0?val%n:n+val%n;
}
let circularArrayLoop = function(nums) {
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        if(nums[i] == 0){
            continue;
        }
        let j = i,k = getIndex(i,nums);
        while (nums[k]*nums[i]>0 && nums[getIndex(k,nums)] * nums[i]>0) {
            if(j==k){
                if(j==getIndex(j,nums)){
                    break;
                }
                return true;
            }
            j = getIndex(j,nums);
            k = getIndex(getIndex(k,nums),nums);
        }
        j = i;
        let val = nums[i];
        while (nums[j] * val >0) {
            let next = getIndex(j,nums);
            nums[j] = 0;
            j = next;
        }
    }
    return false;
};
let nums = [2,-1,1,2,2];
let res = circularArrayLoop(nums);
console.log(res);
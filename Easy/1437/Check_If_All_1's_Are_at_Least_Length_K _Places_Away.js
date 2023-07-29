/**
 * Check If All 1's Are at Least Length K Places Away
 */
var kLengthApart = function(nums, k) {
    if(k==0)return true;
    for (let start=-1,i = 0; i < nums.length; i++) {
        if(nums[i] == 1) {
			if(start != -1 && i - start - 1 < k) {
                return false;
            }
			start = i;
        }
    }
    return true;
};
let nums=[1,1,1,0],k=3;
let res=kLengthApart(nums,k);
console.log(res);
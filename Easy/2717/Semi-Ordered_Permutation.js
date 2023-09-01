/**
 * Semi-Ordered Permutation
 */
var semiOrderedPermutation = function(nums) {
    let first=0,last=0,n=nums.length;
    for (let i = 0; i < nums.length; i++) {
        if(nums[i]==1){
            first=i;
        }else if(nums[i]==n){
            last=i;
        }
    }
    if(first==0 && last==0){
        return 0;
    }else if(first<last){
        return first+n-last-1;
    }else{
        return first + (n - 1 - last) - 1;
    }
};
let nums =
[2,1,4,3];
let res=semiOrderedPermutation(nums);
console.log(res);
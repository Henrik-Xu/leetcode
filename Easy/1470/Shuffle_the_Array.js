/**
 * Shuffle the Array
 */
var shuffle = function(nums, n) {
    let res=[];
    for (let i = 0; i < n; i++) {
        res.push(nums[i],nums[i+n]);
    }
    return res;
};
let nums=[1,2,3,4,4,3,2,1],n=4;
let res=shuffle(nums,n); //[1,4,2,3,3,2,4,1]
console.log(res);
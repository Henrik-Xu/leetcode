/**
 * Largest Number
 */
var largestNumber = function(nums) {
    nums.sort((a,b)=>(b+''+a).localeCompare(a+''+b));
    if(nums[0]=='0'){
        return '0';
    }
    return nums.join('');
};
let nums = [3,30,34,5,9];
let res=largestNumber(nums);
console.log(res);
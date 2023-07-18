/**
 * Squares of a Sorted Array
 * Follow up: Squaring each element and sorting the new array is very trivial, could you find an O(n) solution using a different approach
 */
let sortedSquares = function(nums) {
    let res=new Array(nums.length).fill(0);
    let i=0,j=nums.length-1,index=j;
    while (i<=j) {
        if(Math.abs(nums[i])>Math.abs(nums[j])){
            res[index--]=nums[i]*nums[i];
            i++;
        }else{
            res[index--]=nums[j]*nums[j];
            j--;
        }
    }
    return res;
};
let nums=[-7,-3,2,3,11];
let res=sortedSquares(nums);
console.log(res);
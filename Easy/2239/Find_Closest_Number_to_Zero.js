/**
 * Find Closest Number to Zero
 */
var findClosestNumber = function(nums) {
    let max=Number.MAX_SAFE_INTEGER,res=0;
    for (const num of nums) {
        if(Math.abs(num)<max){
            max=Math.abs(num);
            res=num;
        }
        if(Math.abs(num)==max){
            if(num>0){
                res=num;
            }
        }
    }
    return res;
};
let nums=[-100000,-100000];
let res=findClosestNumber(nums);
console.log(res);
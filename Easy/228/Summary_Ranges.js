/**
 * Summary Ranges
 */
let summaryRanges = function(nums) {
    let start=0,end=0;
    let res=[];
    for (let i = 0; i < nums.length; i++) {
        if(nums[i]+1==nums[i+1]){
            end++;
            continue;
        }
        if(start==end){
            res.push(''+nums[start]);
        }else{
            res.push(nums[start]+'-->'+nums[end]);
        }
        end++;
        start=end;
    }
    return res;
};
let nums = [0,1,2,4,5,7];
let res=summaryRanges(nums);
console.log(res);
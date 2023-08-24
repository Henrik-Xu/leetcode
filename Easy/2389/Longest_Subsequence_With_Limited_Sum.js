/**
 * Longest Subsequence With Limited Sum
 */
var answerQueries = function(nums, queries) {
    nums.sort((a,b) => a-b);
    let result = [];
    for(let i = 0; i < queries.length; i++){
        let sum = 0;
        let count = 0;
        for(let j = 0; j < nums.length; j++){
            sum += nums[j];
            if(sum <= queries[i]){
                count++;
            }else{
                break;
            }
        }
        result.push(count);
    }
    return result;
};
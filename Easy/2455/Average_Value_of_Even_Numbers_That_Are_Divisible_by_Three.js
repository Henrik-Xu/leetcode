/**
 * Average Value of Even Numbers That Are Divisible by Three
 */
var averageValue = function(nums) {
    let sum=0,count=0;
    for (const num of nums) {
        if(num%3===0 && num%2===0){
            sum+=num;
            count++;
        }
    }
    return count==0?0:Math.floor(sum/count);
};
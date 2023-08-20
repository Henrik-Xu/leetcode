/**
 * Minimum Amount of Time to Fill Cups
 */
var fillCups = function(amount) {
    let max=0,sum=0;
    for (const num of amount) {
        max=Math.max(max,num);
        sum+=num;
    }
    return Math.max(Math.floor((sum+1)/2),max);
};
let amount=[5,4,4];
let res=fillCups(amount);
console.log(res);
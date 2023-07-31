/**
 * Average Salary Excluding the Minimum and Maximum Salary
 */
var average = function(salary) {
    let max=-1,min=-1,sum=0;
    for (const s of salary) {
        max=max==-1?s:Math.max(max,s);
        min=min==-1?s:Math.min(min,s);
        sum+=s;
    }
    let res=(sum-max-min)/(salary.length-2);
    return res;
};
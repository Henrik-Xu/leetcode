/**
 * Intersection of Multiple Arrays
 */
var intersection = function(nums) {
    let count=new Array(1001).fill(0);
    for (let i = 0; i < nums.length; i++) {
        const row = nums[i];
        for (let j = 0; j < row.length; j++) {
            const value = row[j];
            count[value]++;
        }
    }
    let res=[];
    for (let i = 0; i < count.length; i++) {
        if(count[i]===nums.length){
            res.push(i);
        }
    }
    return res;
};
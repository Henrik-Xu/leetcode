/**
 * Special Array With X Elements Greater Than or Equal X
 */
var specialArray = function(nums) {
    let length=nums.length;
    let count=new Array(length+1).fill(0);
    for (const n of nums) {
        if(n>length)
            count[length]++;
        else
            count[n]++;
    } 
    let res=0;
    for (let i = length; i >=0; i--) {
        res+=count[i];
        if(i==res){
            return i;
        }
    }
    return -1;
};
let nums = [3,5];
let res=specialArray(nums);
console.log(res);
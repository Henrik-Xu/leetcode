/**
 * How Many Numbers Are Smaller Than the Current Number
 */
var smallerNumbersThanCurrent = function(nums) {
    let map=new Map();
    let copy=[...nums].sort((a,b)=>a-b);
    let count=0;
    for (const n of copy) {
        if(!map.has(n)){
            map.set(n,count);
        }
        count++;
    }
    let res=[];
    for (const i of nums) {
        res.push(map.get(i));
    }
    return res;
};
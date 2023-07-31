/**
 * Can Make Arithmetic Progression From Sequence
 */
var canMakeArithmeticProgression = function(arr) {
    let max=Number.MIN_SAFE_INTEGER,min=Number.MAX_SAFE_INTEGER;
    let seen=new Set();
    for (const a of arr) {
        max=Math.max(a,max);
        min=Math.min(a,min);
        seen.add(a);
    }
    if((max-min)%(arr.length-1)!=0)return false;
    let diff=(max-min)/(arr.length-1);
    while (min<max) {
        if(!seen.has(min)){
            return false;
        }
        min+=diff;
    }
    return true;
};
let arr = [3,5,1];
let res=canMakeArithmeticProgression(arr);
console.log(res);
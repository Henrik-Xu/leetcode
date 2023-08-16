/**
 * Keep Multiplying Found Values by Two
 */
var findFinalValue = function(nums, original) {
    let set=new Set();
    for (const n of nums) {
        if(n%original==0)
            set.add(n);
    }
    while(set.has(original)){
        original*=2;
    }
    return original;
};
/**
 *  Sign of the Product of an Array
 */
var arraySign = function(nums) {
    let count=0;
    for (const n of nums) {
        if (n === 0) {
            return 0;
        }else if (n < 0) {
            count++;
        }
    }
    return count%2 === 0 ? 1 : -1;
};
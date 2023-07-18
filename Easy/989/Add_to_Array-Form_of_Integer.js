/**
 * Add to Array-Form of Integer
 */
let addToArrayForm = function(num, k) {
    let res=[];
    for (let i = num.length - 1; i >= 0; --i) {
        res.unshift((num[i] + k) % 10);
        k = Math.floor((num[i] + k) / 10);
    }
    while (k > 0) {
        res.unshift(k % 10);
        k = Math.floor(k/10);
    }
    return res;
};
let num = [2,7,4], k = 181;
let res=addToArrayForm(num,k);
console.log(res);
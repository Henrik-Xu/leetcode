/**
 * Binary Prefix Divisible By 5
 */
let prefixesDivBy5 = function(nums) {
    let k=0;
    let res=[];
    for (const n of nums) {
        k = (k << 1 | n) % 5; 
        res.push(k == 0); 
    } 
    return res;
 };
let nums = [0,1,1];
let res=prefixesDivBy5(nums);
console.log(res);
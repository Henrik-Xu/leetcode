/**
 * Prime Number of Set Bits in Binary Representation
 */
let countPrimeSetBits = function(left, right) {
    let set =new Set([2, 3, 5, 7, 11, 13, 17, 19]);
    let res=0;
    for (let i = left; i <=right; i++) {
       let count=i.toString(2).split('').filter(x=>x=='1').length;
       if(set.has(count)){
        res++;
       }
    }
    return res;
};
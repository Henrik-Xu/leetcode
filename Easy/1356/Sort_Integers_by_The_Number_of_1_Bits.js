/**
 * Sort Integers by The Number of 1 Bits
 */
var sortByBits = function(arr) {
    return arr.sort((a,b)=>countone(a)-countone(b)||a-b);
};
let countone=function(number){
    let count=0;
    while (number) {
        count+=number&1;
        number=number>>1;
    }
    return count;
}
let arr = [0,1,2,3,4,5,6,7,8];
let res=sortByBits(arr); 
console.log(res);
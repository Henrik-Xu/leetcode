/**
 * Sum of Unique Elements
 */
var sumOfUnique = function(nums) {
   let count=new Array(101).fill(0);
   for (const n of nums) {
       count[n]++;
   }
   let sum=0;
   for (let i = 0; i < count.length; i++) {
    if(count[i]==1) sum+=i;   
   }
   return sum;
};
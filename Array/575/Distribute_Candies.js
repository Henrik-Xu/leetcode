/**
 * Distribute Candies   
 */
let distributeCandies = function(candyType) {
   let set = new Set(candyType);
   return Math.min(set.size,candyType.length/2); 
};
let candyType = [1,1,2,2,3,3];
let res = distributeCandies(candyType);
console.log(res);
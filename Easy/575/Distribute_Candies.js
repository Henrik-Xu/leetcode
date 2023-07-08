/**
 * Distribute Candies
 */
let distributeCandies = function(candyType) {
    let set = new Set(candyType);
    return Math.min(set.size,candyType.length/2); 
 };
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  return climb_Stairs(0, n);
};

let climb_Stairs = function(i, n) {
  if (i > n) {
    return 0;
  }
  if (i == n) {
    return 1;
  }
  return climb_Stairs(i + 1, n) + climb_Stairs(i + 2, n);
};

console.log(climbStairs(2));

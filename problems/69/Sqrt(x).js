/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let result = Math.sqrt(x);
  return result == NaN ? 0 : parseInt(result);
};

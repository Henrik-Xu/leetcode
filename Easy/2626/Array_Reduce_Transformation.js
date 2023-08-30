/**
 * Array Reduce Transformation
 */
function reduce(nums, fn, init) {
    let val = init;
    for (const num of nums) {
      val = fn(val, num);
    }
    return val;
  }
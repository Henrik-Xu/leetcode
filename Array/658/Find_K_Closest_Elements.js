/**
 * Find K Closest Elements
 * Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array.
 *  The result should also be sorted in ascending order.
 * An integer a is closer to x than an integer b if:
  |a - x| < |b - x|, or
  |a - x| == |b - x| and a < b

 */
let findClosestElements = function (arr, k, x) {
  let low = 0, high = arr.length - 1;
  while (high - low >= k) {
    if (Math.abs(arr[low] - x) <= Math.abs(arr[high] - x)) {
      high--;
    } else {
      low++;
    }
  }
  let res = [];
  while (low <= high) {
    res.push(arr[low]);
    low++;
  }
  return res;
};
let arr = [1, 2, 3, 4, 5], k = 4, x = -1;
let res = findClosestElements(arr, k, x);
console.log(res);


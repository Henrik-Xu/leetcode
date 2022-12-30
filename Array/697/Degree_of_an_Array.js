/**
 * Degree of an Array
 */
let findShortestSubArray = function (A) {
  let count = new Map(), first = new Map();
  let res = 0, degree = 0;
  for (let i = 0; i < A.length; i++) {
    if (!first.has(A[i])) {
      first.set(A[i], i);
    }
    if (count.has(A[i])) {
      count.set(A[i], count.get(A[i]) + 1);
    } else {
      count.set(A[i], 1);
    }
    if (count.get(A[i]) > degree) {
      degree = count.get(A[i]);
      res = i - first.get(A[i]) + 1;
    } else if (count.get(A[i]) == degree) {
      res = Math.min(res, i - first.get(A[i]) + 1);
    }
  }
  return res;
};
let nums = [1, 2, 2, 3, 1];
let res = findShortestSubArray(nums);
console.log(res);

/**
 * Top K Frequent Elements
 * Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
 */
let topKFrequent = function(nums, k) {
  let map = new Map();
  for (const num of nums) {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  }
  let sortMap = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));
  let res = [];
  for (const [key, value] of sortMap) {
    if (res.length < k) {
      res.push(key);
    }
  }
  return res;
};
let nums = [1, 1, 1, 2, 2, 3],
  k = 2;
let res = topKFrequent(nums, k);
console.log(res);

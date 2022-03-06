/**
 * Top K Frequent Elements
 * Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
 * Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
 */
let topKFrequent = function(nums, k) {
  let swap = function(arr, a, b) {
    [arr[a], arr[b]] = [arr[b], arr[a]];
  };
  let less = function(v, w) {
    return v < w;
  };
  let parttion = function(arr, low, high, keyMap) {
    let i = low,
      j = high + 1;
    while (true) {
      while (i < high && less(keyMap.get(arr[++i]), keyMap.get(arr[low])));
      while (j > low && less(keyMap.get(arr[low]), keyMap.get(arr[--j])));
      if (i >= j) {
        break;
      }
      swap(arr, i, j);
    }
    swap(arr, low, j);
    return j;
  };
  let res = [];
  let map = new Map();
  for (const num of nums) {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  }
  let keys = [...map.keys()];
  k = keys.length - k;
  let low = 0,
    high = keys.length - 1;
  while (low < high) {
    let j = parttion(keys, low, high, map);
    if (j < k) {
      low = j + 1;
    } else if (j > k) {
      high = j - 1;
    } else {
      break;
    }
  }
  return keys.slice(k);
};
let nums = [1, 1, 1, 2, 2, 3],
  k = 2;
let res = topKFrequent(nums, k);
console.log(res);

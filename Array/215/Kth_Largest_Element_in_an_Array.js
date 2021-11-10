/**
 * Kth Largest Element in an Array
 * Given an integer array nums and an integer k, return the kth largest element in the array.
 * Note that it is the kth largest element in the sorted order, not the kth distinct element.
 */
let findKthLargest = function(nums, k) {
  let partition = function(arr, low, high) {
    let i = low,
      j = high + 1;
    while (true) {
      while (i < high && less(arr[++i], arr[low]));
      while (j > low && less(arr[low], arr[--j]));
      if (i >= j) {
        break;
      }
      swap(arr, i, j);
    }
    swap(arr, low, j);
    return j;
  };
  let less = function(v, w) {
    return v < w;
  };
  let swap = function(arr, a, b) {
    [arr[a], arr[b]] = [arr[b], arr[a]];
  };
  k = nums.length - k;
  let low = 0,
    high = nums.length - 1;
  while (low < high) {
    let j = partition(nums, low, high);
    if (j < k) {
      low = j + 1;
    } else if (j > k) {
      high = j - 1;
    } else {
      break;
    }
  }
  return nums[k];
};

let nums = [3, 2, 1, 5, 6, 4],
  k = 2;
let res = findKthLargest(nums, k);
console.log(res);

/**
 * Max Chunks To Make Sorted
 */
let maxChunksToSorted = function (arr) {
  if (arr == null || arr.length == 0) return 0;
  let max = 0, count = 0;
  for (let i = 0; i < arr.length; i++) {
    max = Math.max(max, arr[i]);
    if (max == i) {
      count++;
    }
  }
  return count;
};
let arr = [1, 0, 2, 3, 4];
let res = maxChunksToSorted(arr);
console.log(res);

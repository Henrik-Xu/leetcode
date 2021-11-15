/**
 * H-Index II
 * You must write an algorithm that runs in logarithmic time.
 */
let hIndex = function(citations) {
  let low = 0,
    len = citations.length,
    high = len - 1,
    mid;
  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    if (citations[mid] >= len - mid) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return len - low;
};
let citations = [0, 1, 3, 5, 6];
let res = hIndex(citations);
console.log(res);

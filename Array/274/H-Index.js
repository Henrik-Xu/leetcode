/**
 * H-Index
 */
let hIndex = function(citations) {
  let n = citations.length;
  let buckets = new Array(n + 1).fill(0);
  for (const c of citations) {
    if (c >= n) {
      buckets[n]++;
    } else {
      buckets[c]++;
    }
  }
  let count = 0;
  for (let i = n; i >= 0; i--) {
    count += buckets[i];
    if (count >= i) {
      return i;
    }
  }
  return 0;
};
let citations = [3, 0, 6, 1, 5];
let res = hIndex(citations);
console.log(res);

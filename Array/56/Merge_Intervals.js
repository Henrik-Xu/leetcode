/**
 * Merge Intervals
 * Given an array of intervals where intervals[i] = [starti, endi],
 *  merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.
 */
let merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let res = [];
  for (const interval of intervals) {
    if (res.length == 0 || res[res.length - 1][1] < interval[0]) {
      res.push(interval);
    } else {
      res[res.length - 1][1] = Math.max(res[res.length - 1][1], interval[1]);
    }
  }
  return res;
};

let intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];
let res = merge(intervals);
console.log(res);

/**
 * Non-overlapping Intervals
 * Given an array of intervals intervals where intervals[i] = [starti, endi],
 * return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.
 * Constraints:
 * 1 <= intervals.length <= 105
 * intervals[i].length == 2
 * -5 * 104 <= starti < endi <= 5 * 104
 */
let eraseOverlapIntervals = function(intervals) {
  if (intervals.length == 0) return 0;
  let count = 1;
  intervals.sort((a, b) => a[1] - b[1]);
  let end = intervals[0][1];
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] >= end) {
      end = intervals[i][1];
      count++;
    }
  }
  return intervals.length - count;
};
let intervals = [[1, 2], [2, 3], [3, 4], [1, 3]];
let res = eraseOverlapIntervals(intervals);
console.log(res);

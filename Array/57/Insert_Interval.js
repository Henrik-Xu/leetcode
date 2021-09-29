/**
 * Insert Interval
 */
let insert = function(intervals, newInterval) {
  intervals.push(newInterval);
  intervals.sort((a, b) => a[0] - b[0]);
  let res = [];
  for (const interval of intervals) {
    if (res.length == 0 || res[res.length - 1][1] < interval[0]) {
      res.push(interval);
    } else {
      res[res.length - 1][1] = Math.max(interval[1], res[res.length - 1][1]);
    }
  }
  return res;
};

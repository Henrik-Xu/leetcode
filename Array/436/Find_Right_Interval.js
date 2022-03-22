/**
 * Find Right Interval
 * You are given an array of intervals, where intervals[i] = [starti, endi] and each starti is unique.
 * The right interval for an interval i is an interval j such that startj >= endi and startj is minimized.
 * Return an array of right interval indices for each interval i. If no right interval exists for interval i, then put -1 at index i.
 */
let findRightInterval = function(intervals) {
  if (intervals.length == 0) return -1;
  let map = new Map();
  let max = intervals[0][0];
  for (let index = 0; index < intervals.length; index++) {
    map.set(intervals[index][0], index);
    max = Math.max(max, intervals[index][0]);
  }
  let res = [];
  for (let [start, end] of intervals) {
    if (end > max) {
      res.push(-1);
    } else {
      while (!map.has(end)) {
        end++;
      }
      res.push(map.get(end));
    }
  }
  return res;
};
let intervals = [[3, 4], [2, 3], [1, 2]];
let res = findRightInterval(intervals);
console.log(res);

/**
 * Insert Interval
 */
var insert = function(intervals, newInterval) {
    let i=0,n=intervals.length;
    let res=[];
    let [start,end]=newInterval;
    while (i<n && intervals[i][1]<start) {
        res.push(intervals[i]);
        i++;
    }
    while (i<n && intervals[i][0]<=end) {
        start=Math.min(intervals[i][0],start);
        end=Math.max(intervals[i][1],end);
        i++;
    }
    res.push([start,end]);
    while (i<n) {
        res.push(intervals[i]);
        i++;
    }
    return res;
};
let intervals=[[1,2],[3,5],[6,7],[8,10],[12,16]],newInterval=[4,8];
let res=insert(intervals,newInterval);
console.log(res);
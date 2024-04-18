/**
 * Merge Intervals
 */
var merge = function(intervals) {
    intervals.sort((a,b)=>a[0]-b[0]);
    let res=[];
    for (const interval of intervals) {
        if(res.length==0 || res[res.length-1][1]<interval[0]){
            res.push(interval);
        }else{
            res[res.length-1][1]=Math.max(res[res.length-1][1],interval[1]);
        }
    }
    return res;
};
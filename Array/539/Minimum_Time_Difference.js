/**
 * Minimum Time Difference
 * Given a list of 24-hour clock time points in "HH:MM" format, return the minimum minutes difference between any two time-points in the list.
 */
let findMinDifference = function(timePoints) {
    let mark = new Array(24*60).fill(false);
    for (const time of timePoints) {
        let t = time.split(':');
        let h = parseInt(t[0]);
        let m = parseInt(t[1]);
        if(mark[h*60+m]){
            return 0;
        }
        mark[h*60+m] = true;
    }
    let prev = 0, min = Number.MAX_SAFE_INTEGER;
    let first = Number.MAX_SAFE_INTEGER, last  = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < 24*60; i++) {
        if(!mark[i])continue;
        if(first != Number.MAX_SAFE_INTEGER){
            min = Math.min(min,i-prev);
        }
        first = Math.min(first,i);
        last = Math.max(last,i);
        prev = i;
    }
    min = Math.min(min,24*60 - last + first);
    return min;
};
let timePoints = ["00:00","23:59"];
let res = findMinDifference(timePoints);
console.log(res);
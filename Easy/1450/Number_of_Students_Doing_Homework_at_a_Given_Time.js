/**
 * Number of Students Doing Homework at a Given Time
 */
let busyStudent = function (startTime, endTime, queryTime) {
    let res = 0;
    for (let i = 0; i < startTime.length; ++i) {
        res += startTime[i] <= queryTime && queryTime <= endTime[i] ? 1 : 0;
    }
    return res;
};
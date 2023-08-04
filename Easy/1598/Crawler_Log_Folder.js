/**
 * Crawler Log Folder
 */
var minOperations = function(logs) {
    let res=0;
    for (const log of logs) {
        if(log=='../')res=Math.max(--res,0);
        else if(log!=='./')res++;
        else continue;
    }
    return res;
};
/**
 * The Employee That Worked on the Longest Task
 */
var hardestWorker = function(n, logs) {
    let prev=0,min=0,max=-1;
    for (const [i,log] of logs) {
        if(max<log-prev){
            max=log-prev;
            min=i;
        }else if(max==log-prev){
            if(min>i){
                min=i;
            }
        }
        prev=log;
    }
    return min;
};
/**
 * Number of Employees Who Met the Target
 */
var numberOfEmployeesWhoMetTarget = function(hours, target) {
    let res=0;
    for (const h of hours) {
        if(h>=target){
            res++;
        }
    }
    return res;
};
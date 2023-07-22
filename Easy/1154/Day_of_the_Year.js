/**
 * Day of the Year
 */
let dayOfYear = function(date) {
    let arr=date.split('-');
    let year=parseInt(arr[0]),month=parseInt(arr[1]),day=parseInt(arr[2]);
    let days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let isLeap=checkYear(year);
    let res=0;
    while (month-1>0) {
        res+=days[month-2];
        if(isLeap&&month==3){
           res+=1;
        }
        month--;
    }
    res+=day;
    return res;
};
let checkYear=function(year){
    if(year%400==0)return true;
    if(year%100==0)return false;
    if(year%4==0)return true;
    return false;
}
let date= "2003-03-01";
let res=dayOfYear(date);
console.log(res);
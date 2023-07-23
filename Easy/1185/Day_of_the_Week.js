/**
 * Day of the Week
 * Zeller Formula
 */
let dayOfTheWeek = function(day, month, year) {
    const LIST = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return LIST[new Date(`${year}-${month}-${day}`).getDay()];
};
let day = 31, month = 8, year = 2019;
let res=dayOfTheWeek(day,month,year);
console.log(res);
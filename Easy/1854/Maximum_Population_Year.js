/**
 * Maximum Population Year
 */
var maximumPopulation = function(logs) {
    let year=new Array(101).fill(0);
    for (const [birth,dead] of logs) {
        year[birth-1950]++;
        year[dead-1950]--;
    }
    let max=year[0],maxYear=1950;
    for (let i = 1; i < year.length; i++) {
        year[i]+=year[i-1];
        if(year[i]>max){
            max=year[i];
            maxYear=i+1950;
        }
    }
    return maxYear;
};
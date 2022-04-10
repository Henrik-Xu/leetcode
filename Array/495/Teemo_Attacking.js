/**
 * Teemo Attacking
 */
let findPoisonedDuration = function(timeSeries, duration) {
    let total = 0;
    for (let i = 0; i < timeSeries.length-1; i++) {
        if(timeSeries[i+1]-timeSeries[i]>duration){
            total += duration
        }else{
            total += timeSeries[i+1]-timeSeries[i];
        }
    }
    return total+duration;
};
let timeSeries = [1,4], duration = 2;
let res = findPoisonedDuration(timeSeries,duration);
console.log(res);
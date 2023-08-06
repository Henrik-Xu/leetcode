/**
 * Find the Highest Altitude
 */
var largestAltitude = function(gain) {
    let max = 0;
    let sum = 0;
    for (let i = 0; i < gain.length;i++){
        sum += gain[i];
        max = Math.max(max, sum);
    }
    return max;
};
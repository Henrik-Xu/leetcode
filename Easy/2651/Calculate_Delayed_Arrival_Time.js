/**
 * Calculate Delayed Arrival Times
 */
var findDelayedArrivalTime = function(arrivalTime, delayedTime) {
    return (arrivalTime + delayedTime)%24;
};
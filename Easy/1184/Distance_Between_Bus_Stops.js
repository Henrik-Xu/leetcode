/**
 * Distance Between Bus Stops
 */
let distanceBetweenBusStops = function(distance, start, destination) {
    let first=0,second=0;
    for (let i = start; i!=destination; i=(i+1)%distance.length) {
        first+=distance[i];
    }
    for (let i = destination; i !=start; i=(i+1)%distance.length) {
        second+=distance[i];
    }
    return Math.min(first,second);
};
let distance = [1,2,3,4], start = 0, destination = 1;
let res=distanceBetweenBusStops(distance,start,destination);
console.log(res);
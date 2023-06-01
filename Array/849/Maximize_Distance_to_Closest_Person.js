/**
 * Maximize Distance to Closest Person
 */
let maxDistToClosest = function(seats) {
    let last=-1,closest=0;
    for (let i = 0; i < seats.length; i++) {
        if(seats[i]==1){
            closest=last<0?i:Math.max(closest,Math.floor((i-last)/2));
            last=i;
        }
    }
    closest=Math.max(closest,seats.length-last-1);
    return closest;
};
let seats = [1,0,0,0,1,0,1];
let res = maxDistToClosest(seats);
console.log(res);
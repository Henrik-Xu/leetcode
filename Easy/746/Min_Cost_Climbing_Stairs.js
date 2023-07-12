/**
 * Min Cost Climbing Stairs
 */
let minCostClimbingStairs = function(cost) {
    let first=cost[0],second=cost[1];
    for (let i = 2; i < array.length; i++) {
        let current=cost[i]+Math.min(first,second);
        first=second;
        second=current;
    }
    return Math.min(first,second);
};
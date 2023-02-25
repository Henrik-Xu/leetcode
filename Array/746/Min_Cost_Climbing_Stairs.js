/**
 * Min Cost Climbing Stairs
 */
let minCostClimbingStairs = function(cost) {
    let n = cost.length;
    if(n==1)return cost[0];
    if(n==2)return Math.min(cost[0],cost[1]);
    let first = cost[0],second=cost[1];
    for (let i = 2; i <n; i++) {
        let curr=cost[i]+Math.min(first,second);
        first=second;
        second=curr;
    }
    return Math.min(first,second);
};
let cost = [10,15,20];
let res=minCostClimbingStairs(cost);
console.log(res);
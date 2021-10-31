/**
 * Gas Station
 */
let canCompleteCircuit = function(gas, cost) {
  let start = 0,
    total = 0,
    tank = 0;
  for (let i = 0; i < gas.length; i++) {
    tank += gas[i] - cost[i];
    if (tank < 0) {
      start = i + 1;
      total += tank;
      tank = 0;
    }
  }
  return total + tank < 0 ? -1 : start;
};

let gas = [1, 2, 3, 4, 5],
  cost = [3, 4, 5, 1, 2];
let res = canCompleteCircuit(gas, cost);
console.log(res);

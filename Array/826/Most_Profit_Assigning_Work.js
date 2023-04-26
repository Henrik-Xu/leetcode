/**
 * Most Profit Assigning Work
 */
let job = function (difficulty, profit) {
  this.difficulty = difficulty;
  this.profit = profit;
}
let maxProfitAssignment = function (difficulty, profit, worker) {
  let N = difficulty.length;
  let jobs = [];
  for (let i = 0; i < difficulty.length; i++) {
    jobs.push(new job(difficulty[i], profit[i]));
  }
  jobs.sort((a, b) => a.difficulty - b.difficulty);
  worker.sort((a, b) => a - b);
  let best = 0, res = 0, i = 0;
  for (const ablity of worker) {
    while (i < N && ablity >= jobs[i].difficulty) {
      best = Math.max(jobs[i].profit, best);
      i++;
    }
    res += best;
  }
  return res;
};
let difficulty = [85, 47, 57], profit = [24, 66, 99], worker = [40, 25, 25];
let res = maxProfitAssignment(difficulty, profit, worker);
console.log(res);

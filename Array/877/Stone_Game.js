/**
 * Stone Game
 */
let stoneGame = function (piles) {
  let dp = [...piles], n = piles.length;
  for (let d = 1; d < n; d++) {
    for (let i = 0; i < n - d; i++) {
      dp[i] = Math.max(piles[i] - dp[i + 1], piles[i + d] - dp[i]);
    }
  }
  return dp[0] > 0;
};
let piles = [5, 3, 4, 5];
let res = stoneGame(piles);
console.log(res);

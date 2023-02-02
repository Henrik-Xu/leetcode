/**
 * Maximum Length of Repeated Subarray
 */

let findLength = function (A, B) {
  let ans = 0;
  let memo = new Array(A.length + 1).fill(0).map(() => new Array(B.length + 1).fill(0));
  for (let i = A.length - 1; i >= 0; i--) {
    for (let j = B.length - 1; j >= 0; j--) {
      if (A[i] == B[j]) {
        memo[i][j] = memo[i + 1][j + 1] + 1;
        ans = Math.max(ans, memo[i][j]);
      }
    }
  }
  return ans;
};

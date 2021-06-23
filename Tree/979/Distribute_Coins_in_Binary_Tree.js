/**
 * Distribute Coins in Binary Tree
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
let distributeCoins = function(root) {
  let ans = 0;
  let dfs = function(root) {
    if (!root) return 0;
    let left = dfs(root.left);
    let right = dfs(root.right);
    ans += Math.abs(left) + Math.abs(right);
    return root.val + L + R - 1;
  };
};

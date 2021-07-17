/**
 * Binary Tree Coloring Game
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
let count = function(root) {
  if (!root) return 0;
  return count(root.left) + count(root.right) + 1;
};
let btreeGameWinningMove = function(root, n, x) {
  if (!root) return false;
  if (root.val == x) {
    let left = count(root.left);
    let right = count(root.right);
    let parent = n - left - right - 1;
    return (
      parent > left + right || left > right + parent || right > left + parent
    );
  }
  return (
    btreeGameWinningMove(root.left, n, x) ||
    btreeGameWinningMove(root.right, n, x)
  );
};

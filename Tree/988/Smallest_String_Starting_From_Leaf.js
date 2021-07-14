/**
 * Smallest String Starting From Leaf
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
let smallestFromLeaf = function(root) {
  let ans;
  let dfs = function(root, s) {
    if (!root) return;
    s += String.fromCharCode(root.val + 97);
    if (root.left == null && root.right == null) {
      if (ans == null) {
        ans = [...s].reverse().join("");
      } else {
        s = [...s].reverse().join("");
        ans = ans.localeCompare(s) < 0 ? ans : s;
      }
    }
    dfs(root.left, s);
    dfs(root.right, s);
  };
  dfs(root, "");
  return ans;
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
let longestUnivaluePath = function(root) {
  let distance = 0;
  let dfs = function(root) {
    if (!root) return 0;
    let left = dfs(root.left);
    let right = dfs(root.right);
    let distanceL = 0;
    let distanceR = 0;
    if (root.left != null && root.left.val == root.val) {
      distanceL = left + 1;
    }
    if (root.right != null && root.right.val == root.val) {
      distanceR = right + 1;
    }
    distance = Math.max(distance, distanceL + distanceR);
    return Math.max(distanceL, distanceR);
  };
  dfs(root);
  return distance;
};

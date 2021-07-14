/**
 * Delete Nodes And Return Forest
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let delNodes = function(root, to_delete) {
  let set = new Set(to_delete);
  let res = [];
  let dfs = function(root, isRoot) {
    let deleted = set.has(root.val);
    if (isRoot && !deleted) res.push(root);
    root.left = dfs(root.left, deleted);
    root.right = dfs(root.right, deleted);
    return deleted ? null : root;
  };
  dfs(root, true);
  return res;
};

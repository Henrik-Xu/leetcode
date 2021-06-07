/** Find Duplicate Subtrees
 * Given the root of a binary tree, return all duplicate subtrees.
 * For each kind of duplicate subtrees, you only need to return the root node of any one of them.
 * Two trees are duplicate if they have the same structure with the same node values.
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
let findDuplicateSubtrees = function(root) {
  let map = new Map();
  let res = [];
  dfs(root, map.res);
  return res;
  function dfs(root, map, res) {
    if (!root) return "#";
    let subTree = `${root.val}.${dfs(root.left, map, res)}.${dfs(
      root.right,
      map,
      res
    )}`;
    if (map.has(subTree)) {
      map.set(subTree, map.get(subTree) + 1);
    } else {
      map.set(subTree, 1);
    }
    if (map.get(subTree) == 2) {
      res.push(root);
    }
    return subTree;
  }
};

/** N-ary Tree Postorder Traversal
 * Given the root of an n-ary tree, return the postorder traversal of its nodes' values.
 * iteration
 */
function Node(val, children) {
  this.val = val;
  this.children = children;
}
let postorder = function(root) {
  let res = [];
  let dfs = function(root) {
    if (!root) return;
    for (const child of root.children) {
      dfs(child);
    }
    res.push(root.val);
  };
  dfs(root);
  return res;
};

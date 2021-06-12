/** N-ary Tree Postorder Traversal
 * Given the root of an n-ary tree, return the postorder traversal of its nodes' values.
 * iteration
 */
function Node(val, children) {
  this.val = val;
  this.children = children;
}
let postorder = function(root) {
  if (!root) return [];
  let stack = [root];
  let res = [];
  while (stack.length != 0) {
    let current = stack.pop();
    res.unshift(current.val);
    if (current.children) {
      stack.push(...current.children);
    }
  }
  return res;
};

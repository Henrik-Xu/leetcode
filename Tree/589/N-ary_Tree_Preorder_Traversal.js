/** N-ary Tree Preorder Traversal
 *  Given the root of an n-ary tree, return the preorder traversal of its nodes' values.
 *  Nary-Tree input serialization is represented in their level order traversal. Each group of children is separated by the null value (See examples)
 *  iteration
 */
function Node(val, children) {
  this.val = val;
  this.children = children;
}
let preorder = function(root) {
  if (!root) return [];
  let stack = [root];
  let res = [];
  while (stack.length != 0) {
    let current = stack.shift();
    res.push(current.val);
    if (current.children) {
      stack.unshift(...current.children);
    }
  }
  return res;
};

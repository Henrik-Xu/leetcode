/** N-ary Tree Level Order Traversal
 *  Given an n-ary tree, return the level order traversal of its nodes' values.
 *  Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value
 */
function Node(val, children) {
  this.val = val;
  this.children = children;
}
let levelOrder = function(root) {
  if (!root) return [];
  let stack = [root];
  let levels = [];
  while (stack.length != 0) {
    let length = stack.length;
    let level = [];
    for (let i = 0; i < length; i++) {
      let current = stack.shift();
      level.push(current.val);
      if (current.children) {
        stack.push(...current.children);
      }
    }
    levels.push(level);
  }
  return levels;
};

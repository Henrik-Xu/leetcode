/**
 * Maximum Level Sum of a Binary Tree
 * Given the root of a binary tree, the level of its root is 1, the level of its children is 2, and so on.
 * Return the smallest level x such that the sum of all the values of nodes at level x is maximal.
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
let maxLevelSum = function(root) {
  let queue = [root];
  let level = 0;
  let max = 0;
  let sum = Number.NEGATIVE_INFINITY;
  while (queue.length != 0) {
    let length = queue.length;
    let temp = 0;
    level++;
    for (let i = 0; i < length; i++) {
      const current = queue.shift();
      temp += current.val;
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
    if (temp > sum) {
      max = level;
      sum = temp;
    }
  }
  return max;
};

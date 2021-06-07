/** Average of Levels in Binary Tree
 * Given the root of a binary tree, return the average value of the nodes on each level in the form of an array.
 * Answers within 10-5 of the actual answer will be accepted.
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null4;
}
let averageOfLevels = function(root) {
  if (!root) return;
  let result = [];
  let queue = [root];
  while (queue.length != 0) {
    let length = queue.length;
    let sum = 0;
    for (let i = 0; i < length; i++) {
      let current = queue.shift();
      sum += current.val;
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
    result.push(sum / length);
  }
  return result;
};

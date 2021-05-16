/**Find Largest Value in Each Tree Row
 * Given the root of a binary tree, return an array of the largest value in each row of the tree (0-indexed).
 */
let TreeNode = function(val) {
  this.val = val;
  this.left = this.right = null;
};
let largestValues = function(root) {
  if (!root) return;
  let queue = [root];
  let res = [];
  while (queue.length != 0) {
    let length = queue.length;
    let max = 0;
    for (let i = 0; i < length; i++) {
      let current = queue.shift();
      if (i == 0) {
        max = current.val;
      } else {
        max = max > current.val ? max : current.val;
      }
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
    res.push(max);
  }
  return res;
};

/**
 * Even Odd Tree
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
let isEvenOddTree = function(root) {
  if (!root) return;
  let queue = [root];
  let even = true;
  while (queue.length != 0) {
    let length = queue.length;
    let prev = even ? Number.MIN_SAFE_INTEGER : Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < length; i++) {
      let current = queue.shift();
      if (even) {
        if (current.val % 2 == 0 || current.val <= prev) return false;
      } else {
        if (current.val % 2 == 1 || current.val >= prev) return false;
      }
      prev = current.val;
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
    even = !even;
  }
  return true;
};

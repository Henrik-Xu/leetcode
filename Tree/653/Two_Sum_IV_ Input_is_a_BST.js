/** Two Sum IV - Input is a BST
 * Given the root of a Binary Search Tree and a target number k, return true if there exist
 * two elements in the BST such that their sum is equal to the given target.
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
let findTarget = function(root, k) {
  let stack = [];
  let current = root;
  let map = new Map();
  while (stack.length != 0 || current != null) {
    while (current != null) {
      stack.push(current);
      current = current.left;
    }
    current = stack.pop();
    if (map.has(k - current.val)) {
      return true;
    } else {
      map.set(current.val, 1);
    }
    current = current.right;
  }
  return false;
};

/** Univalued Binary Tree
 *  A binary tree is univalued if every node in the tree has the same value.
 *  Return true if and only if the given tree is univalued.
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let isUnivalTree = function(root) {
  if (!root) return true;
  let stack = [root];
  let prev = root.val;
  while (stack.length != 0) {
    let current = stack.shift();
    if (current.val != prev) {
      return false;
    }
    if (current.left) {
      stack.push(current.left);
    }
    if (current.right) {
      stack.push(current.right);
    }
  }
  return true;
};

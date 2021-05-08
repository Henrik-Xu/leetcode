/**Find Mode in Binary Search Tree
 * Given the root of a binary search tree (BST) with duplicates, return all the mode(s) (i.e., the most frequently occurred element) in it.
 * If the tree has more than one mode, return them in any order.
 * Assume a BST is defined as follows:
 *  1. The left subtree of a node contains only nodes with keys less than or equal to the node's key.
 *  2. The right subtree of a node contains only nodes with keys greater than or equal to the node's key.
 *  3. Both the left and right subtrees must also be binary search trees.
 */
let TreeNode = function(val) {
  this.val = val;
  this.left = this.right = null;
};
let findMode = function(root) {
  if (root == null) return;
  let stack = [];
  let current = root;
  let prev = null;
  let res = [];
  let count = 1,
    max = 1;
  while (stack.length != 0 || current != null) {
    while (current != null) {
      stack.push(current);
      current = current.left;
    }
    current = stack.pop();
    if (prev != null) {
      if (prev == current.val) {
        count++;
      } else {
        count = 1;
      }
    }
    if (count > max) {
      max = count;
      res = [];
      res.push(current.val);
    } else if (count == max) {
      res.push(current.val);
    }
    prev = current.val;
    current = current.right;
  }
  return res;
};

let root = new TreeNode(1);
let right = new TreeNode(2);
right.left = new TreeNode(2);
root.right = right;

let res = findMode(root);
console.log(res);

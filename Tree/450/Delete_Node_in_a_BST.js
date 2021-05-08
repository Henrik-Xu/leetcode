/**Delete Node in a BST
 * Given a root node reference of a BST and a key, delete the node with the given key in the BST.
 * Return the root node reference (possibly updated) of the BST.
 * Basically, the deletion can be divided into two stages:
 *  1. Search for a node to remove.
 *  2. If the node is found, delete the node.
 * Follow up: Can you solve it with time complexity O(height of tree)?
 */
let TreeNode = function(val) {
  this.val = val;
  this.left = this.right = null;
};
let deleteNode = function(root, key) {
  if (root == null) {
    return null;
  }
  if (key < root.val) {
    root.left = deleteNode(root.left, key);
  } else if (key > root.val) {
    root.right = deleteNode(root.right, key);
  } else {
    if (root.left == null) {
      return root.right;
    }
    if (root.right == null) {
      return root.left;
    }
    let val = findMin(root.right);
    root.val = val;
    root.right = deleteNode(root.right, val);
  }
  return root;
};
let findMin = function(root) {
  while (root.left != null) {
    root = root.left;
  }
  return root.val;
};
let root = new TreeNode(5);
let left = new TreeNode(3);
left.left = new TreeNode(2);
left.right = new TreeNode(4);
let right = new TreeNode(6);
right.right = new TreeNode(7);
root.left = left;
root.right = right;

let res = deleteNode(root, 0);
console.log(res);

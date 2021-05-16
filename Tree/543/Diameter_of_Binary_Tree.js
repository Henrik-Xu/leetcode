/**Diameter of Binary Tree
 * Given the root of a binary tree, return the length of the diameter of the tree.
 * The diameter of a binary tree is the length of the longest path between any two nodes in a tree.
 * This path may or may not pass through the root.
 * The length of a path between two nodes is represented by the number of edges between them.
 */
let TreeNode = function(val) {
  this.val = val;
  this.left = this.right = null;
};
let diameterOfBinaryTree = function(root) {
  let max = 0;
  let maxDepth = function(root) {
    if (root == null) return 0;
    let left = maxDepth(root.left);
    let right = maxDepth(root.right);
    max = Math.max(max, left + right);
    return Math.max(left, right) + 1;
  };
  return maxDepth(root);
};
let root = new TreeNode(1);
let left = new TreeNode(2);
let right = new TreeNode(3);
left.left = new TreeNode(4);
left.right = new TreeNode(5);
root.left = left;
root.right = right;

let res = diameterOfBinaryTree(root);
console.log(res);

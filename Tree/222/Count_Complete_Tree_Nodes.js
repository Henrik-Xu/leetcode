/**Count Complete Tree Nodes
 * Given the root of a complete binary tree, return the number of the nodes in the tree.
 * According to Wikipedia, every level, except possibly the last, is completely filled in a complete binary tree,
 * and all nodes in the last level are as far left as posible. It can have between 1 and 2^h nodes inclusive at
 * the last level h
 * Follow up: Traversing the tree to count the number of nodes in the tree is an easy solution but with O(n) complexity.
 * Could you find a faster algorithm.
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
let countNodes = function(root) {
  let height = function(root) {
    return root == null ? -1 : 1 + height(root.left);
  };
  let h = height(root);
  if (h <= 0) return 0;
  if (height(root.right) == h - 1) {
    return Math.pow(2, h) + countNodes(root.right);
  }
  return Math.pow(2, h - 1) + countNodes(root.left);
};
let root = new TreeNode(1);

let left = new TreeNode(2);
let right = new TreeNode(3);

left.left = new TreeNode(4);
left.right = new TreeNode(5);

right.left = new TreeNode(6);

root.left = left;
root.right = right;

let res = countNodes(root);
console.log(res);

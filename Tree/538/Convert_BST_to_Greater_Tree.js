/**Convert BST to Greater Tree
 * Given the root of a Binary Search Tree (BST), convert it to a Greater Tree such that every key of the original BST is changed to the original key
 * plus sum of all keys greater than the original key in BST.
 * As a reminder, a binary search tree is a tree that satisfies these constraints:
 *  The left subtree of a node contains only nodes with keys less than the node's key
 *  The right subtree of a node contains only nodes with keys greater than the node's key
 *  Both the left and right subtrees must also be binary search trees.
 */
let TreeNode = function(val) {
  this.val = val;
  this.left = this.right = null;
};
let convertBST = function(root) {
  let stack = [];
  let current = root;
  let sum = 0;
  while (current != null || stack.length != 0) {
    while (current != null) {
      stack.push(current);
      current = current.right;
    }
    current = stack.pop();
    current.val += sum;
    sum = current.val;
    current = current.left;
  }
  return root;
};

let root = new TreeNode(4);
let left = new TreeNode(1);
let sub1 = new TreeNode(0);
let sub2 = new TreeNode(2);
sub2.right = new TreeNode(3);
left.left = sub1;
left.right = sub2;

let right = new TreeNode(6);
let sub3 = new TreeNode(5);
let sub4 = new TreeNode(7);
sub4.right = new TreeNode(8);
right.left = sub3;
right.right = sub4;

root.left = left;
root.right = right;

let res = convertBST(root);
console.log(res);

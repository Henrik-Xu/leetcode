/**
 * You are given a perfect binary tree where all leaves are on the same level, and every parent has two children.
 * The bianry tree has the following definition:
 * struct Node{
 *      int val;
 *      Node *left;
 *      Node *right;
 *      Node *next;
 * }
 * Populate each next pointer to point to its next right node. If there is no next right node, the next pointer
 * should be set to NULL.
 * Initially, all next pointers are set to NULL.
 * Follow up :
 *  You may only use constant extra space.
 *  Recrusive approach is fine, you may assume implicit stack does not count as extra space for this problem.
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = this.next = null;
}
let connect = function(root) {
  if (!root || !root.left) return root;
  root.left.next = root.right;
  root.right.next = root.next ? root.next.left : null;
  connect(root.left);
  connect(root.right);
  return root;
};

let root = new TreeNode(1);

let left = new TreeNode(2);
let right = new TreeNode(3);

let left_1 = new TreeNode(4);
let left_2 = new TreeNode(5);

let right_1 = new TreeNode(6);
let right_2 = new TreeNode(7);

left.left = left_1;
left.right = left_2;

right.left = right_1;
right.right = right_2;

root.left = left;
root.right = right;

let result = connect(new TreeNode(0));
console.log(result);

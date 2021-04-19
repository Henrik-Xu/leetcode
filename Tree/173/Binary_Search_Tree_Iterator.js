/**
 * Binary Search Tree
 * Binary Search Tree is a node-based binary tree data structure which has the following properities
 *  # The left subtree of a node contains only node with keys lesser than the node's key
 *  # The right subtree of a node contains only node with keys greater than the node's key
 *  # The left and right subtree each much also be a binary search tree.
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
let BSTIterator = function(root) {
  this.root = root;
  this.stack = [];
};
BSTIterator.prototype.next = function() {
  while (this.root) {
    this.stack.push(this.root);
    this.root = this.root.left;
  }
  this.root = this.stack.pop();
  let result = this.root.val;
  this.root = this.root.right;
  return result;
};
BSTIterator.prototype.hasNext = function() {
  return this.root != null || this.stack.length != 0;
};

let root = new TreeNode(7);
let left = new TreeNode(3);
let right = new TreeNode(15);
let right_1 = new TreeNode(9);
let right_2 = new TreeNode(20);

right.left = right_1;
right.right = right_2;
root.left = left;
root.right = right;

let iterator = new BSTIterator(root);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.hasNext());
console.log(iterator.next());
console.log(iterator.hasNext());
console.log(iterator.next());
console.log(iterator.hasNext());
console.log(iterator.next());
console.log(iterator.hasNext());

/**Kth Smallest Element in a BST
 * Given the root of a binary search tree, and an integer k, return the kth (1-indexed) smallest element in the tree.
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
let kthSmallest = function(root, k) {
  let current = root;
  let stack = [];
  while (current != null || stack.length != 0) {
    while (current != null) {
      stack.push(current);
      current = current.left;
    }
    current = stack.pop();
    k--;
    if (k == 0) {
      return current.val;
    }
    current = current.right;
  }
  return null;
};

let root = new TreeNode(5);
let left = new TreeNode(3);

let sub1 = new TreeNode(2);
let sub2 = new TreeNode(4);
sub1.left = new TreeNode(1);

left.left = sub1;
left.right = sub2;

root.left = left;
root.right = new TreeNode(6);

let res = kthSmallest(root, 3);
console.log(res);

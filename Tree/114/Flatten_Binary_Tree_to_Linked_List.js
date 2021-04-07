/**
 * Given the root of a binary tree, flatten the tree into a linked list.
 * The linkes list should use the same TreeNode class where the right child
 * pointer to the next node in the list and the left child pointer is always null.
 * The linked list should be in the same order as a pre-order traversal of the binary tree.
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
let flatten = function(root) {
  if (!root) return;
  if (root.left) {
    let last = root.left;
    while (last.right != null) {
      last = last.right;
    }
    let temp = root.right;
    root.right = root.left;
    last.right = temp;
    root.left = null;
  }
  flatten(root.right);
};

let root = new TreeNode(1);
let left = new TreeNode(2);
left.left = new TreeNode(3);
left.right = new TreeNode(4);

let right = new TreeNode(5);
right.right = new TreeNode(6);

root.left = left;
root.right = right;

let res = flatten(root);
console.log(res);

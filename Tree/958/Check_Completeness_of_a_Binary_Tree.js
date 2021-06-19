/** Check Completeness of a Binary Tree
 *  Given the root of a binary tree, determine if it is a complete binary tree.
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
let isCompleteTree = function(root) {
  let queue = [root];
  while (queue[0] != null) {
    let current = queue.shift();
    queue.push(current.left);
    queue.push(current.right);
  }
  while (queue.length != 0 && queue[0] == null) {
    queue.shift();
  }
  return queue.length == 0;
};

let root = new TreeNode(1);
let left = new TreeNode(2);
left.left = new TreeNode(4);
left.right = new TreeNode(5);

let right = new TreeNode(3);
right.right = new TreeNode(6);

root.left = left;
root.right = right;

let res = isCompleteTree(root);
console.log(res);

/**
 * Given the root of a binary tree, return the level order traversal of it's node's value.(i.e.,from left to right, level by level)
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
let levelOrder = function(root) {
  if (!root) return;
  let queue = [root];
  let levels = [];
  while (queue.length != 0) {
    let length = queue.length;
    let level = [];
    for (let i = 0; i < length; i++) {
      let current = queue.shift();
      level.push(current.val);
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
    levels.push(level);
  }
  return levels;
};

let root = new TreeNode(3);
root.left = new TreeNode(9);
let right = new TreeNode(20);
right.left = new TreeNode(15);
right.right = new TreeNode(7);
root.right = right;

let r1 = levelOrder(root);
console.log(r1);

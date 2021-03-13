/**
 * Given the root of a binary tree, return the zigzag level order traversal of it's nodes' value
 * i.e.from left to right, then right to left for the next level and alternate between
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
let zigzagLevelOrder = function(root) {
  if (!root) return [];
  let queue = [root];
  let levels = [];
  let odd = false;
  while (queue.length != 0) {
    let level = [];
    let length = queue.length;
    for (let i = 0; i < length; i++) {
      let current = queue.shift();
      if (odd) {
        level.unshift(current.val);
      } else {
        level.push(current.val);
      }
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
    odd = !odd;
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

let r1 = zigzagLevelOrder(root);
console.log(r1);

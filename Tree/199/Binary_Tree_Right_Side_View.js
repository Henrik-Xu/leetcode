/**
 * Given a binary tree,imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let rightSideView = function(root) {
  const result = [];
  const queue = [];
  if (root === null) return result;
  queue.push(root);
  while (queue.length != 0) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let n = queue.shift();
      if (i === size - 1) result.push(n.val);
      if (n.left != null) queue.push(n.left);
      if (n.right != null) queue.push(n.right);
    }
  }
  return result;
};

let root = new TreeNode(1);

let left = new TreeNode(2);
let right = new TreeNode(3);

let left_sub_left = new TreeNode(4);
let left_sub_right = new TreeNode(5);

left.left = left_sub_left;
left.right = left_sub_right;

root.left = left;
root.right = right;

let solution = rightSideView(root);
console.log(solution);

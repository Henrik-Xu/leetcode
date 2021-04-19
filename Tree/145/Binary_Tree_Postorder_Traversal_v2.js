function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
let postorderTraversal = function(root) {
  if (!root) return [];
  let stack = [root];
  let res = [];
  while (stack.length != 0) {
    let current = stack.pop();
    res.unshift(current.val);
    if (current.left) {
      stack.push(current.left);
    }
    if (current.right) {
      stack.push(current.right);
    }
  }
  return res;
};

let root = new TreeNode(1);
let left = new TreeNode(2);
left.left = new TreeNode(4);
left.right = new TreeNode(5);

let right = new TreeNode(3);
right.left = new TreeNode(6);
right.right = new TreeNode(7);

root.left = left;
root.right = right;

let res = postorderTraversal(root);
console.log(res);

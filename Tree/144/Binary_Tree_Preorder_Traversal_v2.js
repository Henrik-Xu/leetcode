function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
let preorderTraversal = function(root) {
  if (!root) return [];
  let stack = [root];
  let res = [];
  while (stack.length != 0) {
    let current = stack.pop();
    res.push(current.val);
    if (current.right) {
      stack.push(current.right);
    }
    if (current.left) {
      stack.push(current.left);
    }
  }
  return res;
};

let root = new TreeNode(1);
let right = new TreeNode(2);
right.left = new TreeNode(3);

root.right = right;

let res = preorderTraversal(root);
console.log(res);

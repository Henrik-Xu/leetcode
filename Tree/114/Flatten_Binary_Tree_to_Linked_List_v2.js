function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let prev = null;
var flatten = function(root) {
  if (root == null) return;
  flatten(root.right);
  flatten(root.left);

  root.right = prev;
  root.left = null;
  prev = root;
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

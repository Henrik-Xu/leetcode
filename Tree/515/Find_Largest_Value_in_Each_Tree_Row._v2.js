let TreeNode = function(val) {
  this.val = val;
  this.left = this.right = null;
};
let largestValues = function(root) {
  if (!root) return [];
  let res = [];
  let recrusive = function(root, depth) {
    if (!root) return;
    if (depth == res.length) {
      res.push(root.val);
    } else {
      res[depth] = Math.max(res[depth], root.val);
    }
    recrusive(root.left, depth + 1);
    recrusive(root.right, depth + 1);
  };
  recrusive(root, 0);
  return res;
};

let root = new TreeNode(1);
let left = new TreeNode(3);
let right = new TreeNode(2);
left.left = new TreeNode(5);
left.right = new TreeNode(3);
right.right = new TreeNode(9);
root.left = left;
root.right = right;
let res = largestValues(root);
console.log(res);

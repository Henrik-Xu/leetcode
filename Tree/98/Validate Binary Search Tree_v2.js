function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
let isValidBST = function(root) {
  if (!root) return true;
  let stack = [];
  let current = root;
  let inOrder = Number.NEGATIVE_INFINITY;
  while (stack.length != 0 || current != null) {
    while (current != null) {
      stack.push(current);
      current = current.left;
    }
    current = stack.pop();
    if (inOrder >= current.val) {
      return false;
    }
    inOrder = current.val;
    current = current.right;
  }
  return true;
};

let ex3 = new TreeNode(5);
ex3.left = new TreeNode(4);
let right3 = new TreeNode(6);
right3.left = new TreeNode(3);
right3.right = new TreeNode(7);
ex3.right = right3;
let r3 = isValidBST(ex3);
console.log(r3);

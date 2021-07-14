/**
 * Maximum Difference Between Node and Ancestor
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
let maxAncestorDiff = function(root) {
  let res = 0;
  let helper = function(root, curMax, curMin) {
    if (root == null) return;
    let temp = Math.max(
      Math.abs(curMax - root.val),
      Math.abs(curMin - root.val)
    );
    res = Math.max(temp, res);
    curMax = Math.max(curMax, root.val);
    curMin = Math.min(curMin, root.val);
    helper(root.left, curMax, curMin);
    helper(root.right, curMax, curMin);
    return;
  };
  if (!root) return 0;
  helper(root, root.val, root.val);
  return res;
};

let root = new TreeNode(8);

let left = new TreeNode(3);
left.left = new TreeNode(1);
let sub = new TreeNode(6);
sub.left = new TreeNode(4);
sub.right = new TreeNode(7);
left.right = sub;

let right = new TreeNode(10);
let sub2 = new TreeNode(14);
sub2.left = new TreeNode(13);
right.right = sub2;

root.left = left;
root.right = right;

let res = maxAncestorDiff(root);
console.log(res);

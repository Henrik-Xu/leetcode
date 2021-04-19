function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
let sumNumbers = function(root) {
  let total = 0;
  let helper = function(root, sum) {
    if (root == null) return 0;
    sum = sum * 10 + root.val;
    if (root.left == null && root.right == null) {
      total += sum;
      return;
    }
    helper(root.left, sum);
    helper(root.right, sum);
  };
  helper(root, 0);
  return total;
};

let root = new TreeNode(6);
let left = new TreeNode(4);
let right = new TreeNode(1);

let sub1 = new TreeNode(6);
let sub2 = new TreeNode(4);
let sub3 = new TreeNode(2);
let sub4 = new TreeNode(6);

sub3.left = sub4;
sub2.left = sub3;
sub1.right = sub2;
left.left = sub1;

root.left = left;
root.right = right;

let result = sumNumbers(root);
console.log(result);

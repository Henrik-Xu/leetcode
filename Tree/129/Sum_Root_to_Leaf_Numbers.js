/**
 * Sum Root to Leaf Numbers
 * You are given the root of a binary tree containing digits from 0 to 9 only.
 * Each root-to-leaf path in the tree represents a number.
 *  For example, the root-to-leaf path 1->2->3 represents the number 123
 * Return the total sum of all root-to-leaf numbers.
 * A leaf node is a node with no children.
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
let sumNumbers = function(root) {
  if (!root) return;
  let stack = [root];
  let res = [];
  res.push(root.val);
  let sum = 0;
  while (stack.length != 0) {
    let length = stack.length;
    for (let i = 0; i < length; i++) {
      let current = stack.shift();
      let val = res.shift();
      if (current.left || current.right) {
        if (current.left) {
          stack.push(current.left);
          res.push(val * 10 + current.left.val);
        }
        if (current.right) {
          stack.push(current.right);
          res.push(val * 10 + current.right.val);
        }
      } else {
        sum += val;
      }
    }
  }
  return (sum += res.reduce((a, b) => a + b, 0));
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

let solution = sumNumbers(root);
console.log(solution);

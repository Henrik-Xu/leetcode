/** Range Sum of BST
 * Given the root node of a binary search tree and two integers low and high,
 * return the sum of values of all nodes with a value in the inclusive range [low, high].
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
let rangeSumBST = function(root, low, high) {
  let stack = [];
  let current = root;
  let sum = 0;
  while (current != null || stack.length != 0) {
    while (current != null) {
      stack.push(current);
      current = current.left;
    }
    current = stack.pop();
    if (current.val >= low && current.val <= high) {
      sum += current.val;
    }
    if (current > high) {
      break;
    }
    current = current.right;
  }
  return sum;
};

let root = new TreeNode(10);

let left = new TreeNode(5);
left.left = new TreeNode(3);
left.right = new TreeNode(7);

let right = new TreeNode(15);
right.right = new TreeNode(18);

root.left = left;
root.right = right;

let res = rangeSumBST(root, 7, 15);
console.log(res);

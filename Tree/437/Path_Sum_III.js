/**Path Sum III
 * Given the root of a binary tree and an integer targetSum, return the number of paths where the sum of the values along the path equals targetSum.
 * The path does not need to start or end at the root or a leaf, but it must go downwards (i.e., traveling only from parent nodes to child nodes).
 */
let TreeNode = function(val) {
  this.val = val;
  this.left = this.right = null;
};
let pathSum = function(root, targetSum) {
  let map = new Map();
  let count = 0;
  map.set(0, 1);
  let helper = function(root, currentSum, targetSum) {
    if (root == null) {
      return;
    }
    currentSum += root.val;
    if (map.has(currentSum - targetSum)) {
      count += map.get(currentSum - targetSum);
    }
    if (!map.has(currentSum)) {
      map.set(currentSum, 1);
    } else {
      map.set(currentSum, map.get(currentSum) + 1);
    }
    helper(root.left, currentSum, targetSum);
    helper(root.right, currentSum, targetSum);
    map.set(currentSum, map.get(currentSum) - 1);
  };
  helper(root, 0, targetSum);
  return count;
};
// let root = new TreeNode(10);

// let left = new TreeNode(5);
// let left_1 =new TreeNode(3);
// let left_2 = new TreeNode(2);
// left_1.left = new TreeNode(3);
// left_1.right = new TreeNode(-2);
// left_2.right = new TreeNode(1);
// left.left = left_1;
// left.right = left_2;
// root.left = left;

// let right = new TreeNode(-3);
// right.right = new TreeNode(11);
// root.right = right;

// let root2 = new TreeNode(5);
// let left = new TreeNode(4);
// let left_1 = new TreeNode(11);
// left_1.left = new TreeNode(7);
// left_1.right = new TreeNode(2);
// left.left = left_1;
// root2.left = left;

// let right = new TreeNode(8);
// right.left = new TreeNode(13);
// let right_1 = new TreeNode(4);
// right_1.left = new TreeNode(5);
// right_1.right = new TreeNode(1);
// right.right = right_1;
// root2.right = right;

let root3 = new TreeNode(1);
root3.left = new TreeNode(-2);
root3.right = new TreeNode(-3);

let res = pathSum(root3, -1);
console.log(res);

/** Maximum Binary Tree
 * You are given an integer array nums with no duplicates. A maximum binary tree can be built recursively from nums using the following algorithm:
 * Create a root node whose value is the maximum value in nums.
 * Recursively build the left subtree on the subarray prefix to the left of the maximum value.
 * Recursively build the right subtree on the subarray suffix to the right of the maximum value.
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
let constructMaximumBinaryTree = function(nums) {
  function findMaxNum(nums) {
    let max = nums[0];
    let index = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > max) {
        max = nums[i];
        index = i;
      }
    }
    return { max, index };
  }
  let constructBinaryTree = function(nums) {
    if (nums == null || nums.length == 0) return null;
    let { max, index } = findMaxNum(nums);
    let root = new TreeNode(max);
    root.left = constructBinaryTree(nums.slice(0, index));
    root.right = constructBinaryTree(nums.slice(index + 1, nums.length));
    return root;
  };
  return constructBinaryTree(nums);
};

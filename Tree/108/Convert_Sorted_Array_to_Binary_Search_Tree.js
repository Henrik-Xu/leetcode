/**
 * Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.
 * A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
let sortedArrayToBST = function(nums) {
  if (nums.length == 0) return null;
  let middle = Math.floor(nums.length / 2);
  let node = new TreeNode(nums[middle]);
  node.left = sortedArrayToBST(nums.slice(0, middle));
  node.right = sortedArrayToBST(nums.slice(middle + 1));
  return node;
};

let r1 = sortedArrayToBST([-10, -3, 0, 5, 9]);
console.log(r1);

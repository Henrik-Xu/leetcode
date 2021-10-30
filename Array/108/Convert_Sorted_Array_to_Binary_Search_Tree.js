/**
 * Convert Sorted Array to Binary Search Tree
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
let sortedArrayToBST = function(nums) {
  let construct = function(start, end) {
    if (start > end) return null;
    let middle = Math.floor((start + end) / 2);
    let root = new TreeNode(nums[middle]);
    root.left = construct(start, middle - 1);
    root.right = construct(middle + 1, end);
    return root;
  };
  return construct(0, nums.length - 1);
};
let nums = [-10, -3, 0, 5, 9];
let res = sortedArrayToBST(nums);
console.log(res);

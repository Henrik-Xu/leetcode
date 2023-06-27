/**
 * Convert Sorted Array to Binary Search Tree
 */
let sortedArrayToBST = function(nums) {
    return construct(0, nums.length - 1);
};
let construct = function (start, end) {
    if (start > end) return null;
    let middle = Math.floor((start + end) / 2);
    let root = new TreeNode(nums[middle]);
    root.left = construct(start, middle - 1);
    root.right = construct(middle + 1, end);
    return root;
  }
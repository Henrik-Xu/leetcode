/**
 * Path Sum
 */
let hasPathSum = function(root, targetSum) {
    if(root == null) return false;
    
    if(root.left == null && root.right == null && targetSum - root.val == 0) return true;

    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
}
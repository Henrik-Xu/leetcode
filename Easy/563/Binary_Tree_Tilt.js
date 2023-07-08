/**
 * Binary Tree Tilt
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
let findTilt = function(root){
    let sum = 0;
    let recrusive = function(root){
        if(!root){
            return 0;
        }
        let leftSum = recrusive(root.left);
        let rightSum = recrusive(root.right);
        sum += Math.abs(leftSum-rightSum);
        return leftSum+rightSum+root.val;
    }
    recrusive(root);
    return sum;
}
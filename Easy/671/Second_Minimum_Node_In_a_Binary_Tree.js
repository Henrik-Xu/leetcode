/**
 * Second Minimum Node In a Binary Tree
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
let findSecondMinimumValue = function(root){
    if(!root)return -1;
    if(root.left == null && root.right ==null){
        return -1;
    }
    let left = root.left.val;
    let right = root.right.val;
    if(left == root.val){
        left = findSecondMinimumValue(root.left);
    }
    if(right == root.val){
        right = findSecondMinimumValue(root.right);
    }
    if(left!=-1 && right!=-1){
        return Math.min(left,right);
    }else if(left!=-1){
        return left;
    }else {
        return right;
    }
}
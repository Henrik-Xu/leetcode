/**
 * Binary Tree Inorder Traversal
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
let inorderTraversal = function(root) {
    let result=[];
    recrusive(root,result);
    return result;
};
let recrusive=function(root,result){
    if(root==null)return;
    recrusive(root.left,result);
    result.push(root.val);
    recrusive(root.right,result);
}
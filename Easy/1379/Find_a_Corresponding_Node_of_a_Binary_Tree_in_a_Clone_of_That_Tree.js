/**
 * Find a Corresponding Node of a Binary Tree in a Clone of That Tree
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

let getTargetCopy = function(original, cloned, target) {
    let res = null;
    let dfs = function(original,cloned,target){
        if(original == null)return;
        dfs(original.left,cloned.left,target);
        if(original == target){
           res = cloned;
        }
        dfs(original.right,cloned.right,target);  
    }
    dfs(original,cloned,target);
    return res;
};
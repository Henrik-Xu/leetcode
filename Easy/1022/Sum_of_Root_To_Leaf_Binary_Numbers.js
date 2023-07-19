/**
 * Sum of Root To Leaf Binary Numbers
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
let sumRootToLeaf = function(root) {
    let sum = 0;
    let dfs = function(root,s){
        if(!root)return;
        s+=root.val;
        if(root.left == null && root.right == null){
           sum+=parseInt(s,2);
        }
        dfs(root.left,s);
        dfs(root.right,s);
    }
    dfs(root,'');
    return sum;
};
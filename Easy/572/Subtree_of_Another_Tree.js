/**
 * Subtree of Another Tree
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
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */

let isSubtree = function(s,t){
    if(s==null && t==null)return true;
    if(s==null || t==null)return false;

    return isSame(s,t) || isSubtree(s.left,t) || isSubtree(s.right,t);
};

let isSame=function(t1,t2){
    if(t1==null && t2==null)return true;
    if(t1==null || t2==null)return false;
    
    if(t1.val != t2.val)return false;
    return isSame(t1.left,t2.left) && isSame(t1.right,t2.right);
}
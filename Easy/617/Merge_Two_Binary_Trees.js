/**
 * Merge Two Binary Trees
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */

let mergeTrees = function(root1,root2){
    if(root1 == null && root2 == null)return null;
    let val = (root1==null?0:root1.val)+(root2==null?0:root2.val);
    let node = new TreeNode(val);
    node.left= mergeTrees(root1==null?null:root1.left,root2==null?null:root2.left);
    node.right = mergeTrees(root1==null?null:root1.right,root2==null?null:root2.right);
    return node;
}
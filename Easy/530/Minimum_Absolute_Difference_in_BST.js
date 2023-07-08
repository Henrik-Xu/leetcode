/**
 * Minimum Absolute Difference in BST
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
let getMinimumDifference = function(root) {
    let min=Number.MAX_SAFE_INTEGER;
    let prev=null;
    let inOrder=function(root){
        if(!root)return;
        inOrder(root.left);
        if(prev!=null){
            min=Math.min(min,root.val-prev.val);
        }   
        prev=root;
        inOrder(root.right);
    }
    inOrder(root);
    return min;
};
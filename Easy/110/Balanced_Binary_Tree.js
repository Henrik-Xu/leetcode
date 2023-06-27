/**
 * Balanced Binary Tree
 * height-balanced:A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.
 * A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.
 */
let isBalanced = function(root) {
    return maxDepth(root)>=0;
};
let maxDepth=function(root){
    if(!root)return 0;
    let left = maxDepth(root.left);
    if(left<0) return -1;

    let right = maxDepth(root.right);
    if(right<0)return -1;
    if(Math.abs(left-right)>1){
        return -1;
    }
    return Math.max(left,right)+1;
}
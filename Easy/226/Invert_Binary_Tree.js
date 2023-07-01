/**
 * Invert Binary Tree
 */
let invertTree = function(root) {
    invert(root);
    return root;
};
let invert = function(root){
    if(root==null)return null;
    [root.left,root.right]=[root.right,root.left];
    invert(root.left);
    invert(root.right);
}
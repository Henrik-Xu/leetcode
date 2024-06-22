/**
 * Flatten Binary Tree to Linked List
 */
var flatten = function(root) {
    let pre=null;
    let recrusive=function(root){
        if(!root)return;
        recrusive(root.right);
        recrusive(root.left);
        root.right=pre;
        root.left=null;
        pre=root;
    }
    recrusive(root);
};
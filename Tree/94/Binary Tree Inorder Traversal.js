/**
 * Given the root of a binary tree, return the inorder traversal of its node's value
 */
function TreeNode(val){
    this.val = val;
    this.left = this.right = null;
}

/**
 * recrusive solution
 */
let inorderTraversal = function(root){
    let stack = [];
    recrusive(stack);
    return stack;
    function recrusive(root,stack){
        if(!root)return;
        recrusive(root.left,stack);
        stack.push(root.val);
        recrusive(root.right,stack);
    }
}
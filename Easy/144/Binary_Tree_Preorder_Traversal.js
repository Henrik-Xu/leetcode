/**
 * Binary Tree Preorder Traversal
 */
let preorderTraversal = function(root) {
    let result=[];
    recrusive(root,result);
    return result;
};
let recrusive=function(root,result){
    if(!root)return;
    result.push(root.val);
    recrusive(root.left,result);
    recrusive(root.right,result);
}
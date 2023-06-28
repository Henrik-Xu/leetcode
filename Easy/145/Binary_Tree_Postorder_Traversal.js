/**
 * Binary Tree Postorder Traversal
 */
let postorderTraversal = function(root) {
    let result=[];
    recrusive(root,result);
    return result;
};
let recrusive=function(root,result){
    if(!root)return;
    recrusive(root.left,result);
    recrusive(root.right,result);
    result.push(root.val);
}
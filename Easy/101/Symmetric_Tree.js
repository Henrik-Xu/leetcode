/**
 * Symmetric Tree
 */
let isSymmetric = function(root) {
    return isMirror(root,root);
};
let isMirror=function(p,q){
    if(p==null && q==null)return true;
    if(p==null || q==null)return false;
    if(p.val!=q.val)return false;
    return isMirror(p.left,q.right) && isMirror(p.right,q.left);
}
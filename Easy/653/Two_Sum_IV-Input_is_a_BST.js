/**
 * Two Sum IV - Input is a BST
 */
let findTarget = function(root, k) {
    return dfs(root,root,k);
};

let dfs=function(root,cur,k){
    if(cur==null)return false;
    return search(root,cur,k-cur.val) || dfs(root,cur.left,k) || dfs(root,cur.right,k);
}
let search=function(root,cur,value) {
    if(root==null)return false;
    return (root.val==value&&root!=cur) || (root.val<value &&search(root.right,cur,value)) || (root.val>value && search(root.left,cur,value));
}
/**
 * Univalued Binary Tree
 */
let isUnivalTree = function(root) {
   let prev=-1;
   let dfs=function(root){
    if(!root)return true;
    if(prev<0)prev=root.val;
    return root.val==prev && dfs(root.left) && dfs(root.right);
   }
   return dfs(root);
};
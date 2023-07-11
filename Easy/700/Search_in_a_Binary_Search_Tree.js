/**
 * Search in a Binary Search Tree
 */
let searchBST = function(root, val) {
   if(!root) return null;
   if(root.val==val)return root;
   return root.val<val?searchBST(root.right,val):searchBST(root.left,val);
};
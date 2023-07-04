/**
 * Sum of Left Leaves
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
let sumOfLeftLeaves = function(root) {
   return recrusive(root,false);
};
let recrusive=function(root,isleft){
    if(!root)return 0;
    if(root.left==null&&root.right==null){
       return isleft?root.val:0;
    }
    return recrusive(root.left,true)+recrusive(root.right,false);
}

let l_15=new TreeNode(15);
let l_7=new TreeNode(7);
let l_20=new TreeNode(20,l_15,l_7);

let l_9=new TreeNode(9);

let root=new TreeNode(3,l_9,l_20);
let res=sumOfLeftLeaves(root);
console.log(res);
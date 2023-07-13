/**
 * Minimum Distance Between BST Nodes 
 */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
let minDiffInBST = function(root) {
    let res=Number.MAX_SAFE_INTEGER,pre=null;
    let inOrder=function(root){
        if(root.left!=null)inOrder(root.left);
        if(pre!=null)res=Math.min(res,root.val-pre);
        pre=root.val;
        if(root.right!=null)inOrder(root.right);
    }
    inOrder(root);
    return res;
};
let root1=new TreeNode(1);
let root3=new TreeNode(3);
let root2=new TreeNode(2,root1,root3);

let root6=new TreeNode(6);
let root=new TreeNode(4,root2,root6);

let res=minDiffInBST(root);
console.log(res);
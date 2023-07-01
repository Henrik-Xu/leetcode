/**
 * Binary Tree Paths
 */
function TreeNode(val, left, right) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
let binaryTreePaths = function(root) {
    let res=[];
    recrusive(root,res,'');
    return res;
};
let recrusive=function(root,res,path){
    if(!root){
        return;
    }
    if(root.left==null && root.right==null){
        path+=root.val;
        res.push(path);
        return;
    }
    recrusive(root.left,res,path+root.val+'->');
    recrusive(root.right,res,path+root.val+'->')
}

let left_5=new TreeNode(5);
let left=new TreeNode(2,null,left_5);
let right=new TreeNode(3)
let root=new TreeNode(1,left,right);

let res=binaryTreePaths(root);
console.log(res);
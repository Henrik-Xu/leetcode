let TreeNode = function(val){
    this.val = val;
    this.left = this.right = null;
}
let sumOfLeftLeaves = function(root){
    let sum = 0;
    let helper = function(root){
        if(root.left !=null){
            if(root.left.left==null && root.left.right==null){
                sum+=root.left.val;
            }else{
                helper(root.left);
            }
        }
        if(root.right!=null){
            if(root.right.left!=null || root.right.right!=null){
                helper(root.right);
            }
        }
    }
    helper(root);
    return sum;
}
let root = new TreeNode(3);
root.left = new TreeNode(9);
let right = new TreeNode(20);
right.left = new TreeNode(15);
right.right = new TreeNode(7);
root.right = right;

let res = sumOfLeftLeaves(root);
console.log(res);

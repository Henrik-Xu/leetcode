function TreeNode(val){
    this.val = val;
    this.left = this.right = null;
}
let hasPathSum = function(root,targetSum){
    if(!root){
        return false;
    }
    if(root.left==null && root.right==null){
        return targetSum == root.val;
    }else{
        return hasPathSum(root.left,targetSum-root.val)||hasPathSum(root.right,targetSum-root.val);
    }    
}

let root = new TreeNode(5);
let left = new TreeNode(4);
let subLeft = new TreeNode(11);
subLeft.left = new TreeNode(7);
subLeft.right = new TreeNode(2);
left.left = subLeft;
root.left = left;

let right = new TreeNode(8);
right.left = new TreeNode(13);
let subRight = new TreeNode(4);
subRight.right = new TreeNode(1);
right.right = subRight;
root.right = right;

let r1 = hasPathSum(root,22);
console.log(r1);

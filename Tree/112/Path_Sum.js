/**
 * Given the root of binary tree and integer targetSum, return true if the tree has a root-to-leaf
 * path such that adding up all the values along the path equals targetSum
 */
function TreeNode(val){
    this.val = val;
    this.left = this.right = null;
}
let hasPathSum = function(root,targetSum){
    if(!root) return false;
    let stack = [root];
    let sums = [];
    sums.push(0);
    while (stack.length!=0) {
       let current = stack.pop();
       let sum = sums.pop()+current.val;
       if(current.left==null && current.right==null && targetSum==sum){
           return true;
       }
       if(current.left){
            stack.push(current.left);
            sums.push(sum);
        }
        if(current.right){
            stack.push(current.right);
            sums.push(sum);
        }
    }
    return false;
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

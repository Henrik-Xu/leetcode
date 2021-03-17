/**
 * Given the root of a binary tree and integer targetSum, return all root-to-leaf paths
 * where each path's sum equals targetSum.
 * A leaf is a node with no children
 */
function TreeNode(val){
    this.val = val;
    this.left = this.right = null;
}
let pathSum = function(root,targetSum){
    if(!root)return [];
    let result = [];
    let nums = [];
    let getPath = function(root,sum,nums,result){
        if(!root)return;
        nums.push(root.val);
        if(root.left==null&&root.right==null&&root.val==sum){
            result.push([...nums]);
        } 
        getPath(root.left,sum-root.val,nums,result);
        getPath(root.right,sum-root.val,nums,result);
        nums.pop();
    }
    getPath(root,targetSum,nums,result);
    return result;
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
subRight.left = new TreeNode(5);
subRight.right = new TreeNode(1);
right.right = subRight;
root.right = right;

let r1 = pathSum(root,22);
console.log(r1);

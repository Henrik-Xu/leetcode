/** Sum of Left Leave
 * Given the root of a binary tree, return the sum of all left leaves.
 */
let TreeNode = function(val){
    this.val = val;
    this.left = this.right = null;
}
let sumOfLeftLeaves = function(root){
    let sum = 0;
    let stack = [root];
    while (stack.length!=0) {
        let current = stack.pop();
        if(current.left!=null){
            if(current.left.left == null && current.left.right ==null){
                sum += current.left.val;
            }else{
                stack.push(current.left);
            }
        }
        if(current.right!=null){
            if(current.right.left!=null || current.right.right!=null){
                stack.push(current.right);
            }
        }
    }
    return sum;
}

let root = new TreeNode(3);
root.left = new TreeNode(9);
let right = new TreeNode(20);
right.left = new TreeNode(15);
right.right = new TreeNode(7);
root.right = right;

let res = sumOfLeftLeaves(new TreeNode(1));
console.log(res);

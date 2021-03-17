function TreeNode(val){
    this.val = val;
    this.left = this.right = null;
}

let pathSum = function(root,targetSum){
    if(!root)return;
    let stack = [root];
    let path = [];
    let paths = [];    
    let sums = [0];
    while (stack.length!=0) {
        let current = stack.pop();
        let sum = current.val+sums.pop();
        path.push(current.val);
        if(current.left==null && current.right==null){
            if(sum==targetSum){
                paths.push([...path]);
            }
            path.pop();
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
    return paths;
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

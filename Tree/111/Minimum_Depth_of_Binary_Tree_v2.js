function TreeNode(val){
    this.val = val;
    this.left = this.right = null;
}

/**
 * The minimum depth is the number of nodes along the shortest path from the root node down to the nearest
 */
let minDepth = function(root){
   if(!root) return 0;
   let queue = [];
   let depth = 1;
   queue.push(root);
   while (queue.length!=0) {     
     let length = queue.length;  
     for (let i = 0; i < length; i++) {
        let current = queue.shift();
       if (!current.left && !current.right) {
           return depth;
       }else{
            if(current.left){
                queue.push(current.left);
            }
            if(current.right){
                queue.push(current.right);
            }   
       }           
     }  
     depth++;
   }
}

// let root = new TreeNode(1);
// root.left = new TreeNode(2);

// [3,9,20,null,null,15,7]
let root = new TreeNode(3);

let left = new TreeNode(9);

let right = new TreeNode(20);
let right_1 = new TreeNode(15);
let right_2 = new TreeNode(7);

right.left = right_1;
right.right = right_2;

root.left = left;
root.right = right;
let result = minDepth(root);
console.log(root);

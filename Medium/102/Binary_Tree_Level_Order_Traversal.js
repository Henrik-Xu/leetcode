/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
let levelOrder = function(root){
    if(!root)return [];
    let queue = [root];
    let levels = [];
    while (queue.length!=0) {
        let length = queue.length;
        let level = [];
        for (let i = 0; i < length; i++) {
            let current = queue.shift();
            level.push(current.val);
            if(current.left){
                queue.push(current.left);
            }
            if(current.right){
                queue.push(current.right);
            }
        }
        levels.push(level);
    }
    return levels;
}
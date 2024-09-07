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
 * @return {number[]}
 */
var rightSideView = function(root) {
    if(!root)return [];
    let queue=[root];
    let res=[];
    while (queue.length!=0) {
        let len=queue.length;
        for (let i = 0; i < len; i++) {
            let ele=queue.shift();
            if(i==len-1){
                res.push(ele.val);
            }
            if(ele.left){
                queue.push(ele.left);
            }
            if(ele.right){
                queue.push(ele.right);
            }
        }
    }
    return res;
};
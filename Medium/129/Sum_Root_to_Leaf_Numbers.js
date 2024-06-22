/**
 * Sum Root to Leaf Numbers
 */
/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
    let sum=0;
    let recrusive=function(root,temp){
        if(!root){
            return;
        }
        temp.push(''+root.val);
        if(!root.left && !root.right){
            sum+=parseInt(temp.join(''));
        }else{
            recrusive(root.left,temp);
            recrusive(root.right,temp);
        }
        temp.pop();
    }
    recrusive(root,[]);
    return sum;
};
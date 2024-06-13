/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
let buildTree = function(preorder, inorder) {
    if(preorder == null || preorder.length ==0)return null;
    if(preorder.length == 1){
        return new TreeNode(preorder[0]);
    }
    let findIndex = function(target){
        for (let i = 0; i < inorder.length; i++) {
            if(inorder[i]==target){
                return i;
            }            
        }
        return -1;
    }
    let rootIndex = 0;
    let construct = function(start,end){
        if(start>end)return null;
        let root = new TreeNode(preorder[rootIndex++]);
        let index = findIndex(root.val);
        root.left = construct(start,index-1);
        root.right = construct(index+1,end);
        return root;
    }
    return construct(0,preorder.length-1);
};
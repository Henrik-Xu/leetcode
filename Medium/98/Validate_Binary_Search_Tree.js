/**
 * Validate Binary Search Tree
 */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
/**
* @param {TreeNode} root
* @return {boolean}
*/
var isValidBST = function(root) {
    let pre=null;
    let recrusive=function(root){
        if(!root)return true;
        let left=recrusive(root.left);
        if(pre!=null && root.val<=pre.val){
            return false;
        }
        pre=root;
        let right=recrusive(root.right);
        return left && right;
    }
    return recrusive(root);
};

let left=new TreeNode(1);
let right=new TreeNode(3);
let root=new TreeNode(2,left,right);
let res=isValidBST(root);
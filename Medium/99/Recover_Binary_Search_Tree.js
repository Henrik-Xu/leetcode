/**
 * Recover Binary Search Tree
 */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
/**
* @param {TreeNode} root
* @return {void} Do not return anything, modify root in-place instead.
*/
var recoverTree = function(root) {
    if(!root)return;
    let stack=[];
    let pre=null,first=null,second=null;
    let current=root;
    while (current || stack.length!=0) {
        while (current) {
            stack.push(current);
            current=current.left;
        }
        current=stack.pop();
        if(pre && !first && pre.val>=current.val){
            first=pre;
        }
        if(first && pre.val>=current.val){
            second=current;
        }
        pre=current;
        current=current.right;
    }
    [first.val,second.val]=[second.val,first.val];
    return root;
};

let l2=new TreeNode(2);
let l3=new TreeNode(3,null,l2);
let l1=new TreeNode(1,l3);
let res=recoverTree(l1);
console.log(res);
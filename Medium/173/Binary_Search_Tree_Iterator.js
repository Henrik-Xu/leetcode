/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
let BSTIterator = function(root){
    this.root = root;
    this.stack = [];
}

BSTIterator.prototype.next=function(){
    while (this.root) {
        this.stack.push(this.root);
        this.root = this.root.left;
    }
    this.root= this.stack.pop();
    let result = this.root.val;
    this.root = this.root.right;
    return result;
}

BSTIterator.prototype.hasNext=function(){
   return this.root !=null || this.stack.length!=0;
}
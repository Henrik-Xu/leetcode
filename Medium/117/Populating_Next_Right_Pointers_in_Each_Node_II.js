/**
 * Populating Next Right Pointers in Each Node II
 */
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
let connect = function(root){
    if(!root)return root;
    let stack = [root];
    while (stack.length!=0) {
        let length = stack.length;
        for (let i = 0; i < length; i++) {
           let current = stack.shift();
           if(i!=length-1){
               current.next=stack[0];
           }
           if(current.left){
               stack.push(current.left);
           }
           if(current.right){
               stack.push(current.right);
           }            
        }                
    }
    return root;
}